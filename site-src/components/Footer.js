import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, LinkedInIcon } from "./SocialIcons";
import { nav, contact, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo/logo-white.png"
              alt="Beyond Ability X"
              width={180}
              height={50}
              className="mb-4 h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <p className="font-body text-sm italic text-white/70">Every Athlete Has a Story</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-coral-500">
              Navigate
            </h2>
            <ul className="space-y-2">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-coral-500">
              Connect
            </h2>
            <a
              href={`mailto:${contact.email}`}
              className="block font-body text-sm text-white/70 transition-colors hover:text-white"
            >
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="mt-1 block font-body text-sm text-white/70 transition-colors hover:text-white"
            >
              {contact.phone}
            </a>
            <div className="mt-4 flex gap-3" aria-label="Social links">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <InstagramIcon />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center font-body text-xs text-white/50">
          © {new Date().getFullYear()} Beyond Ability X. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
