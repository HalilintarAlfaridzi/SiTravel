import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setSeo } from "../utils/seo";

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setSeo(pathname);
  }, [pathname]);
}
