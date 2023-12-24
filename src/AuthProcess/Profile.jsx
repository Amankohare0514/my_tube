import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mui/material";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Avatar
        alt={user.name}
        src={user.picture}
        sx={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    )
  );
};

export default Profile;
