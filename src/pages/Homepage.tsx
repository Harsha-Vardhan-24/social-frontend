import { useNavigate } from "react-router-dom"
import { userCheck } from "../utils/utils"
import Login from "./Login"
import { useEffect } from "react"

const Homepage = () => {
  
  const navigate = useNavigate()

  useEffect(() => {
    if(userCheck()) {
      navigate("/feed")
      }
  }, [])

  return (
    <main className="homepage">
      <section className="mockup">Mockups in here</section>
      <Login updateLogin={() => {}} />
    </main>
  )
}

export default Homepage