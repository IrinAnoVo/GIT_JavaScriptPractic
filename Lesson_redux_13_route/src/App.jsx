import { Routes, Route, NavLink } from "react-router";
const App = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="navbar-list">
            <li><NavLink to="/" className="navbar__item ">Home</NavLink></li>
            <li><NavLink to="/about" className="navbar__item navbar__item-active">About</NavLink></li>
            <li><NavLink to="/posts" className="navbar__item">Posts</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
          <Routes>
              <Route path="/" element={<h1>Home</h1>}/>
              <Route path="/about" element={<h1>About</h1>}/>
              <Route path="/posts" element={<h1>Posts</h1>}/>
          </Routes>
      </main>
    </>
  )
}
export default App
