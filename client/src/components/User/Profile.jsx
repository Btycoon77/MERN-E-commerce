import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

import Loader from "../../components/layout/loader/loader";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import Navbar from "../navbar/navbar";
import Header from "../layout/header/Header";

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated]);
  return (
    
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
         <Header/>
         
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Profile;