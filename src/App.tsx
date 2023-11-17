import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="login" element={<Login />}>
          
        </Route>
      </Routes>
    </main>
  )
}

export default App