import { useNavigate } from "react-router-dom"
import { userCheck } from "../utils/utils"
import Login from "./Login"

const Homepage = () => {
  
  const navigate = useNavigate()
  const isLoggedIn = userCheck()
  
  if(!isLoggedIn) {
    return (
      <main className="homepage">
        <section className="mockup">Mockups in here</section>
        <Login updateLogin={() => {}} />
      </main>
    )
  } else {
    return navigate("/feed")
  }
}

export default Homepage