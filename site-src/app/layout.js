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
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  verification: {
    google: "7YTCWXnF9iKfD1xkemmc0YTgFf7MHccW5Vy1-ETidwY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1ZMJTC39JH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1ZMJTC39JH');
            `,
          }}
        />
      </head>
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
