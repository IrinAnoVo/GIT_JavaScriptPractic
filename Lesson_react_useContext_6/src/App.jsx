import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import { ThemeProvider } from "./ThemeContext"

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <HomePage/>
      </ThemeProvider>
    </>
  )
}

export default App
