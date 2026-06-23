import React from "react";

import clsx from "clsx";

import { useCTA } from "../../../hooks/useCTA";

import { footerLayoutConfig } from "./footerLayout.config";

import Logo from "../../atoms/logo/Logo";
import NavigationList from "../../../components/molecules/navigation-list/NavigationList";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import FooterNavigationListSkeleton from "./skeletons/FooterNavigationListSkeleton";

const {
  footerOuterShell: footerOuterShellClasses,
  footerInnerShell: footerInnerShellClasses,
  headingToList: headingToListClasses,
  listToList: ListToListClasses,
} = footerLayoutConfig;

const Footer = ({ data = {}, isLoading, className, ...props }) => {
  const navigationItems = data?.navigationItems || { items: [] };
  const brandTagline = data?.brandTagline || {};
  const quickLinksHeading = data?.quickLinksHeading || {};
  const contactLinksHeading = data?.contactLinksHeading || {};
  const contactLinks = data?.contactLinks || [];
  const availabilityHeading = data?.availabilityHeading || {};
  const availabilityTagline = data?.availabilityTagline || {};
  const copyright = data?.copyright || {};
  const attribution = data?.attribution || {};

  const { handleCTA } = useCTA();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={clsx(footerOuterShellClasses, className)} {...props}>
      <div className={clsx(footerInnerShellClasses)}>
        {/* Logo and Tagline */}
        <div className={clsx(headingToListClasses)}>
          <Logo variant="footer" />
          {isLoading ? (
            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-full rounded" />
              <div className="skeleton h-4 w-4/5 rounded" />
            </div>
          ) : (
            <Text {...brandTagline} />
          )}
        </div>

        {/* Quick Links */}
        <div className={clsx(headingToListClasses)}>
          {isLoading ? (
            <div className="skeleton h-4 w-24 rounded" />
          ) : (
            <Text {...quickLinksHeading} />
          )}
          <nav>
            {isLoading ? (
              <FooterNavigationListSkeleton itemCount={7} />
            ) : (
              <NavigationList {...navigationItems} />
            )}
          </nav>
        </div>

        {/* Contact Links */}
        <div className={clsx(headingToListClasses)}>
          {isLoading ? (
            <div className="skeleton h-4 w-20 rounded" />
          ) : (
            <Text {...contactLinksHeading} />
          )}
          {isLoading ? (
            <div className={clsx(ListToListClasses)}>
              {[1, 2, 3].map((i) => (
                <div key={i} className="skeleton h-4 w-36 rounded" />
              ))}
            </div>
          ) : (
            <ul className={clsx(ListToListClasses)}>
              {contactLinks.map((item) => (
                <li key={item.id}>
                  <Button
                    variant={item?.variant}
                    iconLeft={item?.iconLeft}
                    iconLeftType={item?.iconLeftType}
                    className="!p-0 !h-0"
                    onClick={() => handleCTA(item)}
                  >
                    <span className="select-text">{item?.label}</span>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Availability */}
        <div className={clsx(headingToListClasses)}>
          {isLoading ? (
            <div className="skeleton h-4 w-24 rounded" />
          ) : (
            <Text {...availabilityHeading} />
          )}
          {isLoading ? (
            <div className="flex flex-col gap-2">
              <div className="skeleton h-4 w-full rounded" />
              <div className="skeleton h-4 w-11/12 rounded" />
              <div className="skeleton h-4 w-4/5 rounded" />
            </div>
          ) : (
            <Text {...availabilityTagline} />
          )}
        </div>
      </div>

      <hr aria-hidden="true" className="w-full border-none h-px bg-(--color-divider-background)" />

      <div className="flex flex-col gap-1.5 opacity-90">
        {/* Copyright */}
        {isLoading ? (
          <div className="skeleton h-3 w-64 rounded" />
        ) : (
          <Text variant={copyright?.variant} text={`© 2025-${currentYear} ${copyright?.text}`} />
        )}

        {/* Attributions */}
        {!isLoading && Array.isArray(attribution?.items) && attribution.items.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 opacity-90">
            <Text
              variant={attribution?.variant || "captionDefault"}
              text={attribution?.label || "Attributions:"}
              className="opacity-70"
            />

            {attribution.items.map((item, index) => (
              <span key={item.id} className="flex items-center gap-1.5">
                <Text
                  as="a"
                  variant={attribution?.variant || "captionDefault"}
                  text={item.text}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-(--color-text-primary) hover:underline"
                />

                {index < attribution.items.length - 1 && (
                  <Text
                    variant={attribution?.variant || "captionDefault"}
                    text="·"
                    className="opacity-50"
                  />
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
