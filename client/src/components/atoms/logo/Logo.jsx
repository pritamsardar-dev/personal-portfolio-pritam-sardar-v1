import React from "react";

import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

import LogoDark from "../../../assets/logos/dark/logo-dark.svg";
import LogoLight from "../../../assets/logos/light/logo-light.svg";

const variantClasses = {
  header: `
    w-(--size-logo-header-mobile-width)
    sm:w-(--size-logo-header-tablet-width)
    lg:w-(--size-logo-header-desktop-width)
  `,
  footer: `
    w-(--size-logo-footer-mobile-width)
    sm:w-(--size-logo-footer-tablet-width)
    lg:w-(--size-logo-footer-desktop-width)
  `,
};

const Logo = ({ variant = "header", to = "/", className, ...props }) => {
  const navigate = useNavigate();

  // Navigate and scroll to top instantly on click
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={clsx("shrink-0 block", variantClasses[variant], className)}
      aria-label="Go to homepage"
      {...props}
    >
      {/* Light Logo */}
      <img src={LogoLight} alt="Logo" className="block dark:hidden w-full h-auto" />

      {/* Dark Logo */}
      <img src={LogoDark} alt="Logo" className="hidden dark:block w-full h-auto" />
    </Link>
  );
};

export default Logo;
