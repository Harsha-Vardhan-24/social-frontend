import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Feed from "./pages/Feed"

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="feed" element={<Feed />} />
      </Routes>
    </main>
  )
}

export default App