import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/privateRoute';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/sign-in" element={<SignIn />} />
  <Route path="/sign-up" element={<SignUp/>} />
  <Route path="/about" element={<About />} />
  <Route element={<PrivateRoute/>}>
  <Route path="/profile" element={<Profile />} />
  </Route>
  </Routes>
  </BrowserRouter>;


}
