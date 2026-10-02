import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";
import { contact, socials } from "@/content/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Beyond Ability X.",
};

export default function ContactPage() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal as="h1" className="font-display text-4xl font-bold uppercase tracking-tight text-indigo-900 sm:text-5xl">
          {contact.heading}
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-3xl">
              <Image src={contact.image.src} alt={contact.image.alt} fill className="object-cover" />
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 text-purple-600" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="font-body text-sm text-indigo-900/80 hover:text-indigo-900">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 text-purple-600" aria-hidden="true" />
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="font-body text-sm text-indigo-900/80 hover:text-indigo-900">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-purple-600" aria-hidden="true" />
                <span className="font-body text-sm text-indigo-900/80">{contact.location}</span>
              </li>
            </ul>

            <div className="mt-8 flex gap-3" aria-label="Social links">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-lavender-50 p-2.5 text-indigo-900 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-900 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-lavender-50 p-2.5 text-indigo-900 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-900 hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <InquiryForm formName="Contact" fields={contact.formFields} submitLabel="Send Message" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
