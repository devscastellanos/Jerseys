import { useState, useEffect, useCallback } from "react";

export function useRouter() {
  const parse = () => {
    const hash  = window.location.hash.replace(/^#\/?/, "");
    const parts = hash.split("/");
    if (parts[0] === "producto" && parts[1]) return { page: "product", slug: parts[1] };
    return { page: "home" };
  };

  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const handler = () => setRoute(parse());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((path) => { window.location.hash = path; }, []);

  return { route, navigate };
}
