import { BiHomeAlt, BiBookmark, BiUser } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import image from "../assets/android-chrome-192x192.png";
import profilePic from "../assets/john-wick-profilepic.jfif";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [options, setOptions] = useState(false)
  
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth)
  })
  
  const navigate = useNavigate()

  const userRedirect = () => {
    navigate("/profile")
  }

  const userLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  const moreOptions = () => {
    setOptions(prevState => !prevState)
  }
  
  if(windowSize <= 500) {
    return (
      <section>
        <div className="mobile-header">
          <img onClick={userRedirect} src={profilePic} alt="profile-pic" className="mobile-user-account-img" />
          <img src={image} alt="logo" className="sidebar-logo" />
          <CgMoreO onClick={moreOptions} className="mobile-settings-icon" />
        </div>
        <div className={`profile-more-options${options === false ? ' disabled' : ''}`}>
          <p>Settings</p>
          <p onClick={userLogout}>Log out</p>
        </div>
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
          <h1 onClick={userRedirect}>Profile</h1>
        </div>
        <div className="sidebar-element">
          <CgMoreO onClick={moreOptions} />
          <h1>More</h1>
        </div>
        <div className={`profile-more-options${options === false ? ' disabled' : ''}`}>
          <p>Settings</p>
          <p onClick={userLogout}>Log out</p>
        </div>
        <button className="secondary sidebar-btn">Post</button>
      </section>
    )
  }
}

export default Sidebar