import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import profilePic from "../assets/john-wick-profilepic.jfif";
import { BiImageAdd } from "react-icons/bi";
import { submitPost } from "../utils/utils";
import { useState } from "react";

const Feed = () => {
  const [postImage, setPostImage] = useState(undefined);

  const userFileInput = (e: React.FormEvent) => {
    console.log(e.currentTarget.files[0]);
  };

  return (
    <main className="main-area">
      <Sidebar />
      <section className="feed-area">
        <form className="post-box" onSubmit={submitPost}>
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
          <textarea
            className="post-input-form"
            placeholder="What are your thoughts..?"
          />
          <div className="action-items">
            <label htmlFor="user-upload-img">
              <BiImageAdd className="add-img-icon" />
            </label>
            <input id="user-upload-img" type="file" onChange={userFileInput} />
            <button className="secondary">Post</button>
          </div>
        </form>
        <div className="post-area">
          <div className="post">
            <div className="user-data-post">
              <img src={profilePic} alt="profile-pic" className="profile-pic" />
              <div>
                <p className="user-name">@Thunder</p>
                <p className="username">John Wick</p>
              </div>
            </div>
            <img
              src="https://blenderartists.org/uploads/default/original/4X/7/f/3/7f36fa03901a1714543c7fbdf3403ce4179d5605.jpeg"
              className="user-posted-image"
              alt="user posted image"
            />
            <div className="user-interaction-area">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
        </div>
        <div className="post-area">
          <div className="post">
            <div className="user-data-post">
              <img src={profilePic} alt="profile-pic" className="profile-pic" />
              <div>
                <p className="user-name">@Thunder</p>
                <p className="username">John Wick</p>
              </div>
            </div>
            <img
              src="https://blenderartists.org/uploads/default/original/4X/7/f/3/7f36fa03901a1714543c7fbdf3403ce4179d5605.jpeg"
              className="user-posted-image"
              alt="user posted image"
            />
            <div className="user-interaction-area">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
        </div>
      </section>
      <Searchbar />
    </main>
  );
};

export default Feed;
