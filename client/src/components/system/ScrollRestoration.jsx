import { useEffect } from "react";
import { useLocation,} from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // New navigation → scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;