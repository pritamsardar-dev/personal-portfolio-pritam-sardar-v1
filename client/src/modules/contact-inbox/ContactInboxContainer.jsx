import { useState, useEffect, useCallback } from "react";

import { usePopupMessage } from "../../hooks/usePopupMessage";

import {
  getMessages,
  updateReadStatus,
  updateSpamStatus,
  updateRespondedStatus,
  deleteMessage,
} from "../../api/admin/message.api";

import ContactInbox from "../../components/admin/inbox/ContactInbox";

const MESSAGES_PER_PAGE = 10;

const ContactInboxContainer = () => {
  const { showMessage, closeModal } = usePopupMessage();

  const [messages, setMessages] = useState([]);
  const [counts, setCounts] = useState({
    all: 0,
    unread: 0,
    read: 0,
    responded: 0,
    spam: 0,
  });
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    totalPages: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [activeAction, setActiveAction] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Applies an updater function to a message in both list and selected state
  const updateMessageInState = (id, updater) => {
    setMessages((prev) => prev.map((m) => (m._id === id ? updater(m) : m)));
    setSelectedMessage((prev) => (prev?._id === id ? updater(prev) : prev));
  };

  // Clears selected message if it no longer exists in the current list
  useEffect(() => {
    if (selectedMessage) {
      const exists = messages.find((m) => m._id === selectedMessage._id);
      if (!exists) setSelectedMessage(null);
    }
  }, [messages, selectedMessage]);

  const fetchMessages = useCallback(
    async (filter, page) => {
      try {
        setIsLoading(true);
        const res = await getMessages({
          filter,
          page,
          limit: MESSAGES_PER_PAGE,
        });
        setMessages(res.data.messages);
        setCounts(res.data.counts);
        setPagination(res.data.pagination);
      } catch (err) {
        showMessage({
          role: "alert",
          title: "Could not load messages",
          message:
            err?.response?.data?.message ||
            err?.message ||
            "Something went wrong while fetching messages.",
          variant: "error",
          autoCloseMs: 4000,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [showMessage],
  );

  // Increments refresh key to trigger a refetch without changing filter or page
  const refetch = useCallback(() => {
    setRefreshKey((k) => k + 1);
  }, []);

  useEffect(() => {
    fetchMessages(activeFilter, currentPage);
  }, [activeFilter, currentPage, fetchMessages, refreshKey]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    setSelectedMessage(null);
  };

  const handleMarkRead = async (message) => {
    const next = !message.isRead;
    try {
      setActiveAction("read");
      await updateReadStatus(message._id, next);
      updateMessageInState(message._id, (m) => ({ ...m, isRead: next }));
      refetch();
    } catch (err) {
      showMessage({
        role: "alert",
        title: "Update failed",
        message: err?.response?.data?.message || "Could not update read status.",
        variant: "error",
        autoCloseMs: 4000,
      });
    } finally {
      setActiveAction(null);
    }
  };

  const handleMarkSpam = async (message) => {
    const next = !message.isSpam;
    try {
      setActiveAction("spam");
      await updateSpamStatus(message._id, next);
      refetch();
      showMessage({
        role: "status",
        title: next ? "Marked as spam" : "Removed from spam",
        message: next ? "Message moved to spam." : "Message restored from spam.",
        variant: "success",
        autoCloseMs: 3000,
      });
    } catch (err) {
      showMessage({
        role: "alert",
        title: "Update failed",
        message: err?.response?.data?.message || "Could not update spam status.",
        variant: "error",
        autoCloseMs: 4000,
      });
    } finally {
      setActiveAction(null);
    }
  };

  const handleMarkResponded = async (message) => {
    const next = !message.isResponded;
    try {
      setActiveAction("responded");
      await updateRespondedStatus(message._id, next);
      updateMessageInState(message._id, (m) => ({ ...m, isResponded: next }));
      refetch();
    } catch (err) {
      showMessage({
        role: "alert",
        title: "Update failed",
        message: err?.response?.data?.message || "Could not update responded status.",
        variant: "error",
        autoCloseMs: 4000,
      });
    } finally {
      setActiveAction(null);
    }
  };

  const handleDelete = (message) => {
    showMessage({
      title: "Delete message?",
      message: "This action cannot be undone.",
      variant: "warning",
      autoCloseMs: 0,
      actions: [
        {
          id: "confirm",
          variant: "primary",
          label: "Delete",
          onClick: async () => {
            closeModal();
            try {
              setActiveAction("delete");
              await deleteMessage(message._id);

              if (messages.length === 1 && currentPage > 1) {
                setCurrentPage((prev) => prev - 1);
              } else {
                refetch();
              }

              showMessage({
                role: "status",
                title: "Message deleted",
                message: "Message removed successfully.",
                variant: "success",
                autoCloseMs: 3000,
              });
            } catch (err) {
              showMessage({
                role: "alert",
                title: "Delete failed",
                message: err?.response?.data?.message || "Could not delete message.",
                variant: "error",
                autoCloseMs: 4000,
              });
            } finally {
              setActiveAction(null);
            }
          },
        },
        {
          id: "cancel",
          variant: "secondary",
          label: "Cancel",
          onClick: closeModal,
        },
      ],
    });
  };

  return (
    <ContactInbox
      messages={messages}
      counts={counts}
      pagination={pagination}
      isLoading={isLoading}
      activeAction={activeAction}
      selectedMessage={selectedMessage}
      onSelectMessage={setSelectedMessage}
      activeFilter={activeFilter}
      onFilterChange={handleFilterChange}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onMarkRead={handleMarkRead}
      onMarkSpam={handleMarkSpam}
      onMarkResponded={handleMarkResponded}
      onDelete={handleDelete}
    />
  );
};

export default ContactInboxContainer;
