import { seo } from "../data/siteData";

export function setSeo(pathname) {
  const meta = seo[pathname] || seo["/"];
  document.title = meta.title;
  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement("meta");
    description.setAttribute("name", "description");
    document.head.appendChild(description);
  }
  description.setAttribute("content", meta.description);
}
