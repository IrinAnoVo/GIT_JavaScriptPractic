import { Routes, Route, NavLink } from "react-router";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Posts from "./pages/Post/post";
import Post from "./pages/Post/post";

const setActiLink = ({ isActive }) => {
  return isActive ? "navbar__item navbar__item-active" : "navbar__item";
}

const App = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="navbar-list">
            <li><NavLink to="/" className={setActiLink}>Home</NavLink></li>
            <li><NavLink to="/about" className={setActiLink}>About</NavLink></li>
            <li><NavLink to="/posts" className={setActiLink}>Posts</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/posts" element={<Posts/>}/>
              <Route path="/posts/:postId" element={<Post/>}/>
              <Route path="*" element={<h1>Page not found</h1>}/>
          </Routes>
      </main>
    </>
  ) 
}
export default App
