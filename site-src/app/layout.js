import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://beyondabilityx.com"),
  title: {
    default: "Beyond Ability X — Every Athlete Has a Story",
    template: "%s | Beyond Ability X",
  },
  description:
    "Beyond Ability X is building India's first inclusive sports ecosystem for differently-abled athletes — leagues, media, technology, and community.",
  openGraph: {
    siteName: "Beyond Ability X",
    locale: "en_IN",
    type: "website",
    images: ["/images/hero-video-poster.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
