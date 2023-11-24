import { useFormik } from "formik"
import profilepic from "../assets/john-wick-profilepic.jfif"
const Searchbar = () => {

  const formik = useFormik({
    initialValues: {
      userInput: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="search-area-section">
      <div>
        <form className="search-area" onSubmit={formik.handleSubmit}>
        <input
          id="userInput"
          name="userInput"
          type="userInput"
          className="search-area-input-element"
          onChange={formik.handleChange}
          value={formik.values.userInput}
        />
        <button className="secondary search-btn" type="submit">Submit</button>
        </form>
      </div>
      <div className="trending-area">
        <h1>Trending</h1>
        <div className="trending-items">
          <p>#GTA6</p>
          <p>#GTA6</p>
          <p>#GTA6</p>
          <p>#GTA6</p>
          <p>#GTA6</p>
        </div>
      </div>
      <div className="follow-account-section">
        <h1>Follow these accounts</h1>
        <div>
          <div className="follow-accounts-item">
            <img src={profilepic} alt="account-icon" className="account-icon" />
            <div>
              <p className="user-name">Name</p>
              <p className="username">@UserName</p>
            </div>
            <button className="secondary">Follow</button>
          </div>
          <div className="follow-accounts-item">
            <img src={profilepic} alt="account-icon" className="account-icon" />
            <div>
              <p className="user-name">Name</p>
              <p className="username">@UserName</p>
            </div>
            <button className="secondary">Follow</button>
          </div>
          <div className="follow-accounts-item">
            <img src={profilepic} alt="account-icon" className="account-icon" />
            <div>
              <p className="user-name">Name</p>
              <p className="username">@UserName</p>
            </div>
            <button className="secondary">Follow</button>
          </div>
          <div className="follow-accounts-item">
            <img src={profilepic} alt="account-icon" className="account-icon" />
            <div>
              <p className="user-name">Name</p>
              <p className="username">@UserName</p>
            </div>
            <button className="secondary">Follow</button>
          </div>
          <div className="follow-accounts-item">
            <img src={profilepic} alt="account-icon" className="account-icon" />
            <div>
              <p className="user-name">Name</p>
              <p className="username">@UserName</p>
            </div>
            <button className="secondary">Follow</button>
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Searchbar