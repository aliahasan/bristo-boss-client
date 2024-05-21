import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <button className="btn" onClick={handleGoogleSingIn}>
          <FaGoogle className=""></FaGoogle>
          Goole Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
