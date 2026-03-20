import { useEffect, useRef } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export function useFiltersPagination(defaultFilters = {}, scrollTargetId) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const isDetailPage =
  location.pathname.includes("/full-case-study") ||
  location.pathname.includes("/view-details");

  // track if pagination triggered the page change
  const paginationTriggeredRef = useRef(false);

  // ---------- READ STATE FROM URL ----------

  const page = Number(searchParams.get("page") || 1);

  const filters = {
    scope: searchParams.get("scope") || defaultFilters.scope || "all",
    primary: searchParams.get("primary") || defaultFilters.primary || "all",
    secondary:
      searchParams.get("secondary")?.split(",").filter(Boolean) ||
      defaultFilters.secondary ||
      [],
    sort: searchParams.get("sort") || defaultFilters.sort || "top",
  };

  // ---------- INITIAL URL NORMALIZATION ----------

  useEffect(() => {
    if (location.pathname === "/" || isDetailPage) return;

    if (!searchParams.get("page")) {
      const params = new URLSearchParams(searchParams);

      params.set("page", 1);
      params.set("scope", filters.scope);
      params.set("primary", filters.primary);
      params.set("sort", filters.sort);

      setSearchParams(params, { replace: true });
    }
  }, [
    filters.primary,
    filters.scope,
    filters.sort,
    searchParams,
    setSearchParams,
    location.pathname,
    isDetailPage
  ]);

  // ---------- UPDATE PAGE ----------

  const setPage = (pageNo) => {
    if (location.pathname === "/" || isDetailPage) return;

    paginationTriggeredRef.current = true;

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNo);

    setSearchParams(params);
  };

  // ---------- SCROLL AFTER PAGE CHANGE (ONLY PAGINATION) ----------

  useEffect(() => {
    if (!scrollTargetId) return;
    if (!paginationTriggeredRef.current) return;

    paginationTriggeredRef.current = false;

    const element = document.getElementById(scrollTargetId);
    if (!element) return;

    // jump to top first (for header hide logic)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // smooth scroll to section
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });

  }, [page, scrollTargetId]);

  // ---------- UPDATE FILTERS ----------

  const setFilters = (payload) => {
    if (location.pathname === "/" || isDetailPage) return;

    const params = new URLSearchParams(searchParams);

    Object.entries(payload).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        params.set(key, value.join(","));
      } else {
        params.set(key, value);
      }
    });

    // reset pagination when filters change
    params.set("page", 1);

    setSearchParams(params, { replace: true });
  };

  return {
    page,
    filters,
    setPage,
    setFilters,
  };
}