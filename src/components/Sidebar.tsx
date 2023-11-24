import { BiHomeAlt, BiBookmark, BiUser } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import image from "../assets/android-chrome-192x192.png";
import profilePic from "../assets/john-wick-profilepic.jfif";
import { useState } from "react";

const Sidebar = () => {
  
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth)
  })

  if(windowSize <= 500) {
    return (
      <section className="mobile-header">
        <img src={profilePic} alt="profile-pic" className="mobile-user-account-img" />
        <img src={image} alt="logo" className="sidebar-logo" />
        <CgMoreO className="mobile-settings-icon" />
      </section>
    )
  } else {
    return (
      <section className="sidebar">
        <img src={image} alt="logo" className="sidebar-logo" />
        <div className="sidebar-element">
          <BiHomeAlt />
          <h1>Home</h1>
        </div>
        <div className="sidebar-element">
          <BiBookmark />
          <h1>Bookmarks</h1>
        </div>
        <div className="sidebar-element">
          <BiUser />
          <h1>Profile</h1>
        </div>
        <div className="sidebar-element">
          <CgMoreO />
          <h1>More</h1>
        </div>
        <button className="secondary sidebar-btn">Post</button>
      </section>
    )
  }
}

export default Sidebar