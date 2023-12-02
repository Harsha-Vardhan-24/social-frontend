import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import ProfilePage from "./pages/ProfilePage"
import Auth from "./pages/Auth"

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
        <Route path="login" element={<Login updateLogin={() => {}} />} />
        <Route element={<Auth />}>
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App