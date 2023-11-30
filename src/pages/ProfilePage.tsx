import profilePic from "../assets/john-wick-profilepic.jfif";
import { BiMessageAdd } from "react-icons/bi";
import Post from "../components/Post";

const userProfilePage = () => {

  const posts = [1, 2, 3]

  return (
      <section className="user-profile-area">
        <div className="user-profile-data-area">
          <div className="user-profile-data">
            <img src={profilePic} alt="profile-pic" className="user-profile-pic" />
            <div className="user-profile-text">
              <p className="user-name">@Thunder</p>
              <p className="username">John Wick</p>
            </div>
            <button className="primary profile-btn">Edit Profile</button>
          </div>
          <div className="user-data-count">
            <div>Posts: 0</div>
            <div>Followers: 0</div>
            <div>Following: 0</div>
          </div>
          <button className="primary follow-btn">Follow</button>
        </div>
        {
          posts.length === 0 ? 
          <div className="no-posts">
            <BiMessageAdd />
            <h1>There are no posts, Consider posting your thoughts...</h1>
          </div> : 
          <div>
            <Post />  
            <Post />
            <Post />
          </div>
        }
      </section>
  )
}

export default userProfilePage