import { useNavigate, useLocation } from "react-router-dom";

import { ChevronLeftIcon, ChevronLeftIconType } from "../../assets/icons/system";

import Text from "../atoms/text/Text";
import Button from "../atoms/button/Button";

const terminalLines = [
  { symbol: ">", content: "navigating to route..." },
  { symbol: "x", content: "ERR_ROUTE_NOT_FOUND" },
  { symbol: ">", content: "status: 404" },
];

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="
        w-full flex flex-col items-center justify-center text-center
        px-(--spacing-section-wrapper-mobile-padding-x)
        sm:px-(--spacing-section-wrapper-tablet-padding-x)
        lg:px-(--spacing-section-wrapper-desktop-padding-x)
        py-(--spacing-section-wrapper-mobile-padding-y)
        sm:py-(--spacing-section-wrapper-tablet-padding-y)
        lg:py-(--spacing-section-wrapper-desktop-padding-y)
        min-h-[58dvh]
        gap-(--spacing-heading-1-heading-2-mobile-gap)
        sm:gap-(--spacing-heading-1-heading-2-tablet-gap)
        lg:gap-(--spacing-heading-1-heading-2-desktop-gap)
      "
    >
      {/* Terminal Block */}
      <div
        className="
          w-full max-w-md text-left
          bg-(--color-card-container-background)
          border-(--color-card-container-border)
          border-(length:--border-card-container-base-width)
          rounded-(--radius-card-container-base)
          shadow-(--shadow-card-container)
          overflow-hidden
        "
      >
        {/* Terminal Title Bar */}
        <div
          className="
            flex items-center gap-2
            px-4 py-3
            border-b-(length:--border-card-container-base-width)
            border-b-(--color-card-container-border)
          "
        >
          <span className="w-3 h-3 rounded-full bg-(--color-feedback-error-icon) opacity-70" />
          <span className="w-3 h-3 rounded-full bg-(--color-feedback-warning-icon) opacity-70" />
          <span className="w-3 h-3 rounded-full bg-(--color-text-primary) opacity-30" />
          <span
            className="
              ml-2
              font-mono
              text-(length:--text-body-small-mobile-font-size)
              sm:text-(length:--text-body-small-tablet-font-size)
              text-(--color-text-body)
              opacity-50
              truncate
            "
          >
            {location.pathname}
          </span>
        </div>

        {/* Terminal Body */}
        <div className="flex flex-col gap-2 p-4">
          {terminalLines.map((line, i) => (
            <div key={i} className="flex items-start gap-2 font-mono">
              <span
                className={
                  line.symbol === "x"
                    ? "text-(--color-feedback-error-icon) text-(length:--text-body-small-mobile-font-size) sm:text-(length:--text-body-small-tablet-font-size) shrink-0 mt-px"
                    : "text-(--color-text-primary) text-(length:--text-body-small-mobile-font-size) sm:text-(length:--text-body-small-tablet-font-size) shrink-0 mt-px"
                }
              >
                {line.symbol}
              </span>
              <span
                className="
                  text-(--color-text-body)
                  text-(length:--text-body-small-mobile-font-size)
                  sm:text-(length:--text-body-small-tablet-font-size)
                  font-(--text-body-small-font-weight)
                  break-all
                "
              >
                {line.content}
              </span>
            </div>
          ))}

          {/* Blinking cursor */}
          <div className="flex items-center gap-2 font-mono">
            <span className="text-(--color-text-primary) text-(length:--text-body-small-mobile-font-size) sm:text-(length:--text-body-small-tablet-font-size) shrink-0">
              {">"}
            </span>
            <span
              className="
                inline-block w-2 h-4
                bg-(--color-text-primary)
                opacity-70
                animate-pulse
              "
            />
          </div>
        </div>
      </div>

      {/* Heading and Message */}
      <div
        className="
          flex flex-col items-center
          gap-(--spacing-heading-2-body-mobile-gap)
          sm:gap-(--spacing-heading-2-body-tablet-gap)
          lg:gap-(--spacing-heading-2-body-desktop-gap)
          max-w-lg
        "
      >
        <Text
          variant="heading1Subpage"
          text="Signal Lost"
        />
        <Text
          variant="bodyLarge"
          text="The route you followed does not exist, has been moved, or the parameters supplied are not valid. Navigate back or head to the home page to find what you are looking for."
        />
      </div>

      {/* Action Buttons */}
      <div
        className="
          flex flex-wrap items-center justify-center
          gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
          sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
          lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
          gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
        "
      >
        <Button
          variant="primary"
          label="Home"
          iconLeft={ChevronLeftIcon}
          iconLeftType={ChevronLeftIconType}
          onClick={() => navigate("/")}
        />
        <Button
          variant="secondary"
          label="Go Back"
          iconLeft={ChevronLeftIcon}
          iconLeftType={ChevronLeftIconType}
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default NotFoundPage;