import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function RedirectIfAuth({ children }) {
  const { token } = useContext(UserContext);

  return token ? <Navigate to="/" replace /> : children;
}

export default RedirectIfAuth;
