import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import profilePic from "../assets/john-wick-profilepic.jfif";
import { BiImageAdd } from "react-icons/bi";
import { RiUserUnfollowLine } from "react-icons/ri";
import { getUser, submitPost } from "../utils/utils";
import { useState, useEffect } from "react";
import Post from "../components/Post";
import { checkPosts, postData } from "../api/api";

const Feed = () => {
  const [postImage, setPostImage] = useState<string | undefined>(undefined);
  const [postText, setPostText] = useState<string | undefined>(undefined);
  const [postsData, setPostsData] = useState<any>(undefined)

  const userFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (file) {
      const reader = new FileReader();
      
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        const userPost: string = reader.result as string;
        setPostImage(userPost);
      };
  
      reader.onerror = error => {
        console.error('Reader error:', error);
      };
    }
  };

  const upadteUserText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setPostText(e.target.value)
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await checkPosts(getUser())
      setPostsData(data)
    }
    fetchPosts()
  }, [])


  console.log(postsData)

  return (
    <main className="main-area">
      <Sidebar />
      <section className="feed-area">
        <form className="post-box" onSubmit={submitPost}>
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
          <textarea
            className="post-input-form"
            placeholder="What are your thoughts..?"
            maxLength={200}
            onChange={upadteUserText}
            value={postText}
          />
          <div className="action-items">
            <label htmlFor="user-upload-img">
              <BiImageAdd className="add-img-icon" />
            </label>
            <input id="user-upload-img" type="file" accept="image/*" onChange={userFileInput} />
            <button onClick={(e) => postData(e, postImage, postText)} className="secondary">Post</button>
          </div>
          {postImage !== undefined && <img width={100} height={100} src={postImage} />}
        </form>
        {
          postsData?.message ? (
          <div>
            <RiUserUnfollowLine />
            <h1>Follow Some People To get Posts</h1>
          </div>) : (
          <>
            <Post />
            <Post />
            <Post />
          </>)
        }

      </section>
      <Searchbar />
    </main>
  );
};

export default Feed;
