import { useState } from "react";

import clsx from "clsx";

import contactInboxLayoutConfig from "./ContactInbox.Layout.config";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  InboxIcon,
  MailIcon,
  MailFastIcon,
  MailCheckIcon,
  MailForwardIcon,
  AlertOctagonIcon,
  MailOpenedIcon,
  TrashIcon,
} from "../../../assets/icons/system";
import Button from "../../atoms/button/Button";
import TooltipButton from "../../atoms/tooltip/TooltipButton";
import Tag from "../../atoms/tag/Tag";
import Text from "../../atoms/text/Text";

const {
  page: pageClasses,
  shell: shellClasses,
  sidebar: sidebarClasses,
  detailsPanel: detailsPanelClasses,
  toolbar: toolbarClasses,
  navFilterList: navFilterListClasses,
  navFilterItem: navFilterItemClasses,
  navFilterItemActive: navFilterItemActiveClasses,
  messageList: messageListClasses,
  messageCard: messageCardClasses,
  selectedMessageCard: selectedMessageCardClasses,
  unreadIndicator: unreadIndicatorClasses,
  detailsContent: detailsContentClasses,
} = contactInboxLayoutConfig;

const NAV_FILTERS = [
  { key: "all", label: "All Mail", icon: InboxIcon },
  { key: "unread", label: "Unread", icon: MailIcon },
  { key: "read", label: "Read", icon: MailOpenedIcon },
  { key: "responded", label: "Responded", icon: MailCheckIcon },
  { key: "spam", label: "Spam", icon: AlertOctagonIcon },
];

const ContactInbox = ({
  messages = [],
  counts = { all: 0, unread: 0, read: 0, responded: 0, spam: 0 },
  pagination = { total: 0, page: 1, totalPages: 1 },
  isLoading = false,
  activeAction = null,

  selectedMessage,
  onSelectMessage,

  activeFilter = "all",
  onFilterChange,
  currentPage = 1,
  onPageChange,

  onMarkRead,
  onMarkSpam,
  onMarkResponded,
  onDelete,
}) => {
  // Tracks which filter was active when the user opened a message.
  // Panel view is fully derived from this no effects needed:
  // "message" when filter matches and a message is selected, "list" otherwise.
  const [messageOpenedAtFilter, setMessageOpenedAtFilter] = useState(null);

  const mainPanelView =
    messageOpenedAtFilter === activeFilter && !!selectedMessage ? "message" : "list";

  const handleOpenMessage = (message) => {
    onSelectMessage?.(message);
    setMessageOpenedAtFilter(activeFilter);
  };

  const handleBackToList = () => {
    setMessageOpenedAtFilter(null);
    onSelectMessage?.(null);
  };

  const handleReply = () => {
    if (!selectedMessage) return;
    if (!selectedMessage.isResponded) {
      onMarkResponded?.(selectedMessage);
    }
    window.open(
      `mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}`,
    );
  };

  const limit = pagination.limit ?? 10;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = Math.min(startIndex + limit, pagination.total);

  return (
    <div className={pageClasses}>
      <div className={clsx(shellClasses, "h-[calc(100dvh-120px)]")}>
        {/* Sidebar */}
        <aside
          className={clsx(
            sidebarClasses,
            "h-full border-r",
            "border-(--color-card-wrapper-stroke)",
          )}
        >
          <div className={clsx(toolbarClasses, "justify-between")}>
            <Text variant="bodyLrge" modifiers={["strong"]} text="Inbox" />
          </div>

          <nav className={navFilterListClasses}>
            {NAV_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.key;
              const count = counts[filter.key] ?? 0;

              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => onFilterChange?.(filter.key)}
                  className={clsx(navFilterItemClasses, isActive && navFilterItemActiveClasses)}
                >
                  <filter.icon 
                    className={clsx(
                      "w-[14px] sm:w-[15px] lg:w-[16px] h-auto shrink-0 stroke-[2px]", 
                      "text-(--color-icon-button-icon-only)",
                    )}
                  />

                  <Text
                    variant="bodyLarge"
                    modifiers={isActive ? ["strong"] : []}
                    text={filter.label}
                    className="flex-1 text-start"
                  />

                  <span
                    className={clsx(
                      "px-2 py-0.5 rounded-full text-xs",
                      "border border-(--color-card-wrapper-stroke)",
                      "opacity-70",
                    )}
                  >
                    <Text variant="bodySmall" text={count} />
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Panel */}
        <section className={clsx(detailsPanelClasses, "!flex w-full")}>
          {/* List View */}
          {mainPanelView === "list" && (
            <div className="flex flex-col h-full min-h-0">
              <div className="flex items-center justify-between px-4 pt-3 pb-2">
                <Text
                  variant="bodyLarge"
                  text={NAV_FILTERS.find((f) => f.key === activeFilter)?.label ?? "All Mail"}
                />

                <div className="flex items-center gap-2">
                  {isLoading ? (
                    <Text variant="caption" text="Loading…" className="opacity-60" />
                  ) : (
                    <Text
                      variant="caption"
                      text={`${pagination.total === 0 ? 0 : startIndex + 1}–${endIndex} of ${pagination.total}`}
                      className="opacity-70 whitespace-nowrap"
                    />
                  )}

                  <Button
                    variant="iconOnlyCircular"
                    iconLeft={ChevronLeftIcon}
                    iconClassName="!w-[45%] !h-[45%]"
                    disabled={currentPage <= 1 || isLoading}
                    onClick={() => onPageChange?.((prev) => Math.max(1, prev - 1))}
                  />

                  <Button
                    variant="iconOnlyCircular"
                    iconLeft={ChevronRightIcon}
                    iconClassName="!w-[45%] !h-[45%]"
                    disabled={currentPage >= pagination.totalPages || isLoading}
                    onClick={() => onPageChange?.((prev) => prev + 1)}
                  />
                </div>
              </div>

              <div className={clsx(messageListClasses, "flex-1 pt-1 pb-4")}>
                {isLoading && messages.length === 0 && (
                  <div className="w-full h-full flex items-center justify-center">
                    <Text variant="bodyLarge" text="Loading messages…" className="opacity-60" />
                  </div>
                )}

                {!isLoading && messages.length === 0 && (
                  <div className="w-full h-full flex items-center justify-center">
                    <Text variant="bodyLarge" text="No messages found." className="opacity-60" />
                  </div>
                )}

                {messages.map((message) => {
                  const isSelected = selectedMessage?._id === message._id;

                  return (
                    <button
                      key={message._id}
                      type="button"
                      onClick={() => handleOpenMessage(message)}
                      className={clsx(messageCardClasses, isSelected && selectedMessageCardClasses)}
                    >
                      {!message.isRead && <span className={unreadIndicatorClasses} />}

                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0 flex flex-col gap-1 text-start">
                          <Text
                            variant="bodyLarge"
                            modifiers={!message.isRead ? ["strong"] : []}
                            text={message.name}
                            className="truncate"
                          />
                          <Text
                            variant="labelDefault"
                            text={message.email}
                            className="opacity-70 truncate"
                          />
                        </div>

                        <Text
                          variant="caption"
                          text={
                            message.createdAt
                              ? new Date(message.createdAt).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                              })
                              : ""
                          }
                          className="opacity-60 whitespace-nowrap"
                        />
                      </div>

                      <Text
                        variant="bodyLarge"
                        modifiers={!message.isRead ? ["strong"] : []}
                        text={message.subject}
                        className="opacity-80 text-start truncate"
                      />

                      <Text
                        variant="bodyLarge"
                        text={message.message}
                        className="opacity-60 text-start truncate"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Message View */}
          {mainPanelView === "message" && selectedMessage && (
            <div className={clsx(detailsContentClasses, "h-full p-0")}>
              <div
                className={clsx(
                  "flex items-center justify-start gap-6",
                  "px-(--spacing-card-wrapper-education-mobile-padding-x)",
                  "sm:px-(--spacing-card-wrapper-education-tablet-padding-x)",
                  "lg:px-(--spacing-card-wrapper-education-desktop-padding-x)",
                )}
              >
                <Button
                  variant="iconOnlyCircular"
                  iconLeft={ChevronLeftIcon}
                  onClick={handleBackToList}
                />

                <div className="flex items-center gap-2">
                  <TooltipButton label={selectedMessage.isRead ? "Mark as Unread" : "Mark as Read"}>
                    <Button
                      variant="iconOnlyCircular"
                      size="compact"
                      iconLeft={selectedMessage.isRead ? MailIcon : MailOpenedIcon}
                      iconClassName="!w-[45%] !h-[45%]"
                      disabled={activeAction === "read"}
                      onClick={() => onMarkRead?.(selectedMessage)}
                    />
                  </TooltipButton>

                  <TooltipButton label="Mark as Responded">
                    <Button
                      variant="iconOnlyCircular"
                      size="compact"
                      iconLeft={MailCheckIcon}
                      iconClassName="!w-[45%] !h-[45%]"
                      disabled={activeAction === "responded"}
                      onClick={() => onMarkResponded?.(selectedMessage)}
                    />
                  </TooltipButton>

                  <TooltipButton label="Report Spam">
                    <Button
                      variant="iconOnlyCircular"
                      size="compact"
                      iconLeft={AlertOctagonIcon}
                      iconClassName="!w-[45%] !h-[45%]"
                      disabled={activeAction === "spam"}
                      onClick={() => onMarkSpam?.(selectedMessage)}
                    />
                  </TooltipButton>

                  <TooltipButton label="Delete">
                    <Button
                      variant="iconOnlyCircular"
                      size="compact"
                      iconLeft={TrashIcon}
                      iconClassName="!w-[45%] !h-[45%]"
                      disabled={activeAction === "delete"}
                      onClick={() => onDelete?.(selectedMessage)}
                    />
                  </TooltipButton>

                  <TooltipButton label="Reply via Email">
                    <Button
                      variant="iconOnlyCircular"
                      size="compact"
                      iconLeft={MailForwardIcon}
                      iconClassName="!w-[45%] !h-[45%]"
                      disabled={activeAction === "responded"}
                      onClick={handleReply}
                    />
                  </TooltipButton>
                </div>
              </div>

              <div
                className={clsx(
                  "flex flex-col gap-1",
                  "px-(--spacing-card-wrapper-education-mobile-padding-x)",
                  "sm:px-(--spacing-card-wrapper-education-tablet-padding-x)",
                  "lg:px-(--spacing-card-wrapper-education-desktop-padding-x)",
                  "pb-4",
                  "border-b border-(--color-card-wrapper-stroke)",
                )}
              >
                <Text variant="heading3" text={selectedMessage.subject} />

                <div className="flex gap-1">
                  <Text variant="bodyLarge" modifiers={["strong"]} text={selectedMessage.name} />

                  <Text
                    variant="bodyLarge"
                    text={`<${selectedMessage.email}>`}
                    className="opacity-70"
                  />
                </div>

                <Text
                  variant="caption"
                  size="compact"
                  text={
                    selectedMessage.createdAt
                      ? new Date(selectedMessage.createdAt).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      : ""
                  }
                  className="opacity-60"
                />

                {(selectedMessage.isResponded || selectedMessage.isSpam) && (
                  <div className="flex items-center gap-2 flex-wrap pt-1">
                    {selectedMessage.isResponded && (
                      <Tag size="compact" label="Responded" className="rounded-full" />
                    )}
                    {selectedMessage.isSpam && (
                      <Tag size="compact" label="Spam" className="rounded-full" />
                    )}
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto u-custom-scrollbar">
                <div
                  className={clsx(
                    "w-full",
                    "px-(--spacing-card-wrapper-education-mobile-padding-x)",
                    "sm:px-(--spacing-card-wrapper-education-tablet-padding-x)",
                    "lg:px-(--spacing-card-wrapper-education-desktop-padding-x)",
                    "sm:max-w-(--size-block-wrapper-single-tablet-max-width)",
                    "lg:max-w-(--size-block-wrapper-single-desktop-max-width)",
                  )}
                >
                  <Text
                    variant="bodyLarge"
                    text={selectedMessage.message}
                    className="whitespace-pre-wrap break-words"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {mainPanelView === "message" && !selectedMessage && (
            <div className="w-full h-full flex items-center justify-center">
              <Text variant="bodyLarge" text="Select a message" className="opacity-60" />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ContactInbox;
