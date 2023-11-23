import { BiHomeAlt, BiBookmark, BiUser } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import image from "../assets/android-chrome-192x192.png";

const Sidebar = () => {
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

export default Sidebar