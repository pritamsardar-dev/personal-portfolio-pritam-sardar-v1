import {React } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/organisms/header-section/Header";
import Footer from "../components/organisms/footer-section/Footer";
import { headerNavItems } from "../data/globals/headerNav"
import { footer } from "../data/globals/footer"
import ScrollRestoration from "../components/system/ScrollRestoration";

const sectionLayoutClasses = `
  flex items-center flex-col justify-center w-full
  gap-(--spacing-section-wrapper-mobile-padding-y)
  sm:gap-(--spacing-section-wrapper-tablet-padding-y)
  lg:gap-(--spacing-section-wrapper-desktop-padding-y) 
`;

const Layout = () => {

  return (
    <div className={sectionLayoutClasses}>
      <ScrollRestoration />
      <Header
        navigationItems={{
            variant: "header",
            items: headerNavItems,
            splitLastItem: true,
            showCenterGroup: true
        }}
        showThemeToggle = {true}
      />

      <Outlet />

      <Footer
        navigationItems={{
            variant: "footer",
            items: footer.navItems,
        }}
        brandTagline={footer.brandTagline}
        quickLinksHeading={footer.quickLinksHeading}
        contactLinksHeading={footer.contactLinksHeading}
        contactLinks={footer.contactLinks}
        availabilityHeading={footer.availabilityHeading}
        availabilityTagline={footer.availabilityTagline}
        copyright={footer.copyright}
        />
    </div>
  );
};

export default Layout;