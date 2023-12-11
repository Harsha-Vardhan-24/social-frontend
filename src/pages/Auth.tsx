import Login from "./Login"
import { useState } from "react"
import { Outlet } from "react-router-dom"

const Auth = () => {

  const [login, setLogin] = useState(false)
  
  const updateLogin = () => {
    setLogin(true)
  }

  if(login !== true) {
    return <Outlet />
  } else {
    return <Login updateLogin={updateLogin} />
  }
}

export default Auth