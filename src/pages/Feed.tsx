import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import profilePic from "../assets/john-wick-profilepic.jfif";
import { BiImageAdd } from "react-icons/bi";
import { submitPost } from "../utils/utils";
import { useState } from "react";
import Post from "../components/Post";

const Feed = () => {
  const [postImage, setPostImage] = useState(undefined);

  const userFileInput = (e: any) => {
    const userFile = e.currentTarget.files[0] 
    
    if (userFile) {
      if (userFile.type.startsWith("image/")) {
        console.log(userFile)
      } else {
        console.log("This is not a image file type")
      } 
    }
  }


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
            <input id="user-upload-img" type="file" accept="image/*" onChange={userFileInput} />
            <button className="secondary">Post</button>
          </div>
        </form>
        <Post />
        <Post />
        <Post />
      </section>
      <Searchbar />
    </main>
  );
};

export default Feed;
