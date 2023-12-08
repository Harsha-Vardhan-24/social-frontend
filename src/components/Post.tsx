import profilePic from "../assets/john-wick-profilepic.jfif";
import { BiHeart, BiSolidHeart, BiComment, BiShare, BiBookmark, BiSolidBookmark } from "react-icons/bi";

const Post = () => {
  return (
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
          <div className="icon"><BiHeart /></div>
          <div className="icon"><BiComment /></div>
          <div className="icon"><BiShare /></div>
          <div className="icon"><BiBookmark /></div>
        </div>
        <div>
          <p className="post-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
        </div>
      </div>
    </div>
  )
}

export default Post