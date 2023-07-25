import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './components/Layout'
import UserLogin from './pages/UserLogin'
import ChatRoom from './pages/ChatRoom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<UserLogin />} />
        <Route path='dashboard' element={<ChatRoom />} />
      </Route>
    </Routes>
  );
}

export default App;
