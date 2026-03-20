import React from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";

import LogoLight from "../../../assets/logos/light/logo-light.svg";
import LogoDark from "../../../assets/logos/dark/logo-dark.svg";

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

const Logo = ({
  variant = "header",
  to = "/",
  className,
  ...props
}) => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // prevent default Link behavior

    // Navigate to home page
    navigate(to);

    // Scroll instantly to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={clsx(
        "shrink-0 block",
        variantClasses[variant],
        className
      )}
      aria-label="Go to homepage"
      {...props}
    >
      {/* Light logo */}
      <img
        src={LogoLight}
        alt="Logo"
        className="block dark:hidden w-full h-auto"
      />

      {/* Dark logo */}
      <img
        src={LogoDark}
        alt="Logo"
        className="hidden dark:block w-full h-auto"
      />
    </Link>
  );
};

export default Logo;