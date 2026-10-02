import { Mail, Phone, MapPin } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { InstagramIcon, XIcon, LinkedInIcon } from "@/components/SocialIcons";
import { contact } from "@/content/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Beyond Ability X.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-indigo-900 sm:text-5xl">
          {contact.heading}
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 text-purple-600" aria-hidden="true" />
                <span className="font-body text-sm text-indigo-900/80">{contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 text-purple-600" aria-hidden="true" />
                <span className="font-body text-sm text-indigo-900/80">{contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-purple-600" aria-hidden="true" />
                <span className="font-body text-sm text-indigo-900/80">{contact.location}</span>
              </li>
            </ul>

            <div className="mt-8 flex gap-3" aria-label="Social links">
              {/* PLACEHOLDER: confirm social URLs */}
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-lavender-50 p-2.5 text-indigo-900 hover:bg-indigo-900 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="rounded-full bg-lavender-50 p-2.5 text-indigo-900 hover:bg-indigo-900 hover:text-white"
              >
                <XIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full bg-lavender-50 p-2.5 text-indigo-900 hover:bg-indigo-900 hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <InquiryForm formName="Contact" fields={contact.formFields} submitLabel="Send Message" />
        </div>
      </div>
    </section>
  );
}
