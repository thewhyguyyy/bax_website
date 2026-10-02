/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger serves plain static files (no Node runtime) — export to
  // static HTML/CSS/JS matching how the site is actually hosted.
  output: "export",
  // Static export has no server to run the default image optimizer.
  images: { unoptimized: true },
};

export default nextConfig;
