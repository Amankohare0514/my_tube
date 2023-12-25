import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    borderRadius: "50px",
    cursor: "pointer",
  };
  if (isAuthenticated) {
    return null;
  }
  return (
    <button style={buttonStyle} onClick={() => loginWithRedirect()}>
      <b>Log In</b>
    </button>
  );
};

export default LoginButton;
