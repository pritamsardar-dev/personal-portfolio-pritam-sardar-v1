import { useEffect } from "react";

import { useLocation } from "react-router-dom";

// Scrolls to the top of the page instantly on every route change
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
};

export default useScrollToTop;
