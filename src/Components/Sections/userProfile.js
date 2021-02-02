import react from "react";
import { AnimatePresence, motion } from "framer-motion";
import pageVariants from "./pageVariants";

import "./Styles/userProfile.scss";
import pageTransition from "./pageTransition";

import facebook from "../../Images/facebook.svg";
import instagram from "../../Images/instagram.svg";
import twitter from "../../Images/twitter.svg";
import { ReactSVG } from "react-svg";

const names = [
  "Username",
  "Email",
  "Company",
  "First Name",
  "Last Name",
  "Address",
  "City",
  "Country",
  "Postal Code",
];

const widths = {
  Username: "30%",
  Email: "30%",
  Company: "30%",
  "First Name": "45%",
  "Last Name": "45%",
  Address: "90%",
  City: "29.5%",
  Country: "29.5%",
  "Postal Code": "29.5%",
};

const UserProfile = () => {
  const createForm = () => {
    return (
      <form>
        {names.map(name => (
          <div
            className={"form-entry"}
            key={name}
            style={{ width: widths[name] }}
          >
            <h4>{name}</h4>
            <input type="text"></input>
          </div>
        ))}
        <button>Update Profile</button>
      </form>
    );
  };

  const createFakeTweet = () => {
    return (
      <div className="fakeTweet">
        <div className="background"></div>
        <div className="profile">
          <div className="profile-image"></div>
          <div className="profile-details">
            <p className="danger">Bearded Dragon</p>
            <p
              className="muted-text"
              style={{ fontSize: "0.8em", marginBottom: "1rem" }}
            >
              lizard_23x
            </p>
            <p style={{ marginBottom: "3rem" }}>
              All the women in my family were bearded, especially the dragons.
            </p>
          </div>
          <hr style={{ width: "90%", marginBottom: "1rem" }}></hr>
          <div className="platforms">
            <ReactSVG src={facebook} className="icon" />
            <ReactSVG src={instagram} className="icon" />
            <ReactSVG src={twitter} className="icon" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
    style={{position: 'absolute'}}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="userProfile-wrapper"
    >

        <div style={{ position: "relative" }} className="userProfile-window">
          <h3>Edit Profile</h3>
          {createForm()}
        </div>
        {createFakeTweet()}

    </motion.div>
  );
};

export default UserProfile;
