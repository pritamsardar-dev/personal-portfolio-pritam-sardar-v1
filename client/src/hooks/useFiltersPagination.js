import { useEffect, useRef } from "react";

import { useSearchParams, useLocation } from "react-router-dom";

export function useFiltersPagination(defaultFilters = {}, scrollTargetId) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const isDetailPage =
    location.pathname.includes("/full-case-study") || location.pathname.includes("/view-details");

  // Tracks whether a pagination action triggered the last page change
  const paginationTriggeredRef = useRef(false);

  // Read current page and filter state from URL search params
  const page = Number(searchParams.get("page") || 1);

  const filters = {
    scope: searchParams.get("scope") || defaultFilters.scope || "all",
    primary: searchParams.get("primary") || defaultFilters.primary || "all",
    secondary:
      searchParams.get("secondary")?.split(",").filter(Boolean) || defaultFilters.secondary || [],
    sort: searchParams.get("sort") || defaultFilters.sort || "top",
  };

  // Normalize URL on mount if page param is missing
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
    isDetailPage,
  ]);

  // Updates the page param and marks pagination as the trigger
  const setPage = (pageNo) => {
    if (location.pathname === "/" || isDetailPage) return;

    paginationTriggeredRef.current = true;

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNo);

    setSearchParams(params);
  };

  // Scrolls to the target section only when pagination triggered the page change
  useEffect(() => {
    if (!scrollTargetId) return;
    if (!paginationTriggeredRef.current) return;

    paginationTriggeredRef.current = false;

    const element = document.getElementById(scrollTargetId);
    if (!element) return;

    // Jump to top first to trigger header hide logic
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Smooth scroll to section after layout settles
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }, [page, scrollTargetId]);

  // Updates filter params and resets pagination to page 1
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
