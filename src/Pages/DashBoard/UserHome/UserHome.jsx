import React from "react";
import auth from "../../../Firebase/firebase.config";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl ">
        <span>Hi, Welcome </span>
            <span className="text-green-600">
            {user?.displayName ? user.displayName : "Back"}
            </span>
      </h2>
    </div>
  );
};

export default UserHome;
