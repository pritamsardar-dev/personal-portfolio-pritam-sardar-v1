import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { logoutAdmin } from "../../api/admin/auth.api";
import { getHeader } from "../../api/global.api";
import { getMessages } from "../../api/admin/message.api";

import { useAuth } from "../../hooks/useAuth";
import { usePopupMessage } from "../../hooks/usePopupMessage";

import { clearAdminEditorState } from "./utils/clearAdminEditorState";

import Header from "../../components/organisms/header-section/Header";

const HeaderContainer = (props) => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();
  const { showMessage } = usePopupMessage();

  const [headerData, setHeaderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);

  // Fetches CMS header data on mount
  useEffect(() => {
    const loadHeader = async () => {
      try {
        setIsLoading(true);

        const res = await getHeader();

        setHeaderData(res?.data || null);
      } catch (error) {
        console.error("Failed to load header:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHeader();
  }, []);

  // Polls unread message count every 60s when authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setUnreadMessagesCount(0);
      return;
    }

    const loadUnreadMessagesCount = async () => {
      try {
        const res = await getMessages({
          filter: "all",
          page: 1,
          limit: 1,
        });

        setUnreadMessagesCount(res?.data?.counts?.unread || 0);
      } catch (error) {
        console.error("Failed to load unread count:", error);
      }
    };

    loadUnreadMessagesCount();

    const interval = setInterval(() => {
      loadUnreadMessagesCount();
    }, 60000);

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {
      await logoutAdmin();

      clearAdminEditorState();

      logout();

      showMessage({
        role: "success",
        title: "Logged out",
        message: "You have been logged out successfully.",
        variant: "success",
        autoCloseMs: 2000,
      });

      navigate("/admin");

      localStorage.removeItem("ps:admin:sessionHint");
    } catch {
      showMessage({
        role: "error",
        title: "Logout Failed",
        message: "Something went wrong. Please try again.",
        variant: "error",
        autoCloseMs: 4000,
      });
    }
  };

  return (
    <Header
      {...props}
      data={headerData}
      isLoading={isLoading}
      isAuthenticated={isAuthenticated}
      unreadMessagesCount={unreadMessagesCount}
      onLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
