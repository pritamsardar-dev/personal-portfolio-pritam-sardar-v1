import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import useAdminEditor from "../../hooks/useAdminEditor";

import { loginAdmin } from "../../api/admin/auth.api";
import { STORAGE_KEYS } from "../../utils/storage/keys";

import AdminLoginForm from "../../components/sections/admin/admin-login-form/AdminLoginForm";

const AdminLoginContainer = () => {
  const { isAuthenticated, login } = useAuth();
  const { setIsEditorOpen } = useAdminEditor();
  const { AUTH } = STORAGE_KEYS;
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (formData) => {
    try {
      setIsSubmitting(true);

      await loginAdmin({
        loginId: formData.loginId,
        password: formData.password,
      });

      setIsEditorOpen(true);
      localStorage.setItem(AUTH.SESSION_HINT, "true");

      login();
    } catch (err) {
      throw new Error(err?.response?.data?.message || "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlers = {
    form: {
      loginSubmit: handleLogin,
    },
  };

  const state = {
    form: {
      loginSubmit: isSubmitting,
    },
  };

  return (
    <div className="h-[80dvh] flex items-center justify-center px-4">
      <AdminLoginForm handlers={handlers} state={state} />
    </div>
  );
};

export default AdminLoginContainer;
