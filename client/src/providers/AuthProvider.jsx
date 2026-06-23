import { useState, useEffect } from "react";

import { getMe } from "../api/admin/auth.api";

import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      await getMe();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Skips the auth check for non-admin users to avoid unnecessary API calls
    const shouldCheckAuth = localStorage.getItem("ps:admin:sessionHint");

    if (!shouldCheckAuth) {
      setLoading(false);
      return;
    }

    checkAuth();
  }, []);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
