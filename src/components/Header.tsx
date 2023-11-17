import image from "../assets/favicon-32x32.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={image} alt="logo" />
      <h1 className="text-3xl font-bold underline">SOCIAL</h1>
      <nav>
        <Link to="/login"><button className="primary">Login</button></Link>
        <Link to="/login"><button className="secondary">Sign Up</button></Link>        
      </nav>
    </header>
  )
}

export default Header