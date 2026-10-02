"use client";

import { useId, useState } from "react";
import { FORM_ENDPOINT } from "@/content/form";

const inputClass =
  "w-full rounded-lg border border-indigo-900/15 bg-white px-4 py-3 font-body text-sm text-indigo-900 placeholder:text-indigo-900/30 focus-visible:border-purple-600";

export default function InquiryForm({ formName, fields, submitLabel = "Submit" }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error | unconfigured
  const idPrefix = useId();

  function handleChange(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    for (const field of fields) {
      const value = values[field.name]?.trim();
      if (field.required && !value) {
        nextErrors[field.name] = `${field.label} is required.`;
        continue;
      }
      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.name] = "Enter a valid email address.";
      }
    }
    return nextErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Honeypot: bots fill every field, including this hidden one.
    if (values._gotcha) {
      setStatus("success");
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!FORM_ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName, ...values }),
      });
      // no-cors gives an opaque response — we can't read success/failure,
      // so a thrown error (network down, bad URL) is the only signal we get.
      setStatus("success");
      setValues(Object.fromEntries(fields.map((f) => [f.name, ""])));
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-lavender-50 p-8 text-center">
        <p className="font-display text-lg font-bold uppercase text-indigo-900">Thank you.</p>
        <p className="mt-2 font-body text-sm text-indigo-900/70">
          We&rsquo;ve received your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "unconfigured" && (
        <p role="alert" className="rounded-lg bg-gold-500/20 p-4 font-body text-sm text-indigo-900">
          This form isn&rsquo;t connected to a submission service yet. Please email us directly for
          now — see the contact details on this page.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="rounded-lg bg-coral-500/15 p-4 font-body text-sm text-indigo-900">
          Something went wrong sending your message. Please try again, or email us directly.
        </p>
      )}

      {fields.map((field) => {
        const id = `${idPrefix}-${field.name}`;
        const errorId = `${id}-error`;
        return (
          <div key={field.name}>
            <label
              htmlFor={id}
              className="mb-1.5 block font-display text-xs font-bold uppercase tracking-widest text-indigo-900/70"
            >
              {field.label}
              {field.required && <span aria-hidden="true"> *</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                rows={5}
                required={field.required}
                autoComplete={field.autoComplete}
                value={values[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? errorId : undefined}
                className={inputClass}
              />
            ) : field.type === "select" ? (
              <select
                id={id}
                name={field.name}
                required={field.required}
                value={values[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? errorId : undefined}
                className={inputClass}
              >
                <option value="" disabled>
                  Select one
                </option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                autoComplete={field.autoComplete}
                value={values[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? errorId : undefined}
                className={inputClass}
              />
            )}
            {errors[field.name] && (
              <p id={errorId} role="alert" className="mt-1.5 font-body text-xs text-coral-500">
                {errors[field.name]}
              </p>
            )}
          </div>
        );
      })}

      {/* Honeypot — hidden from sighted users and screen readers, bots fill it */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor={`${idPrefix}-_gotcha`}>Leave this field empty</label>
        <input
          id={`${idPrefix}-_gotcha`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values._gotcha ?? ""}
          onChange={(e) => handleChange("_gotcha", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-coral-500 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
