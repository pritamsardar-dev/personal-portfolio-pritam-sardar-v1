import { useEffect } from "react";

import { useNavigate, Outlet } from "react-router-dom";

import HeaderContainer from "../modules/header/HeaderContainer";
import ScrollRestoration from "../components/system/ScrollRestoration";
import FooterContainer from "../modules/footer/FooterContainer";
import SectionNavPanel from "../components/system/SectionNavPanel";

const sectionLayoutClasses = `
    flex items-center flex-col justify-center w-full
    gap-(--spacing-section-wrapper-mobile-padding-y)
    sm:gap-(--spacing-section-wrapper-tablet-padding-y)
    lg:gap-(--spacing-section-wrapper-desktop-padding-y)
`;

// Root layout wrapper with scroll restoration and Ctrl+Alt+A admin shortcut
const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.altKey && e.key === "a") {
        navigate("/admin");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  return (
    <div className={sectionLayoutClasses}>
      <ScrollRestoration />
      <HeaderContainer />
      <Outlet />
      <FooterContainer />
      <SectionNavPanel />
    </div>
  );
};

export default Layout;