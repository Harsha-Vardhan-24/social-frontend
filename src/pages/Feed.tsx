import Searchbar from "../components/Searchbar"
import Sidebar from "../components/Sidebar"
import profilePic from "../assets/john-wick-profilepic.jfif";
import { BiImageAdd } from "react-icons/bi";

const Feed = () => {
  return (
    <main className="main-area">
      <Sidebar />
      <section className="feed-area">
        <div className="post-box">
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
          <textarea className="post-input-form" placeholder="What are your thoughts..?" />
          <div className="action-items">
            <BiImageAdd className="add-img-icon" />
            <button className="secondary">Post</button>
          </div>
        </div>
      </section>
      <Searchbar />
    </main>
  )
}

export default Feed