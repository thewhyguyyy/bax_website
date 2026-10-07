export const dynamic = "force-static";

const BASE_URL = "https://beyondabilityx.com";

export default function sitemap() {
  const routes = ["", "/what-we-do", "/about", "/contact", "/get-involved"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
