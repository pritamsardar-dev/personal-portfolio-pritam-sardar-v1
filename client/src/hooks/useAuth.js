import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

// Provides access to AuthContext.
export const useAuth = () => useContext(AuthContext);
