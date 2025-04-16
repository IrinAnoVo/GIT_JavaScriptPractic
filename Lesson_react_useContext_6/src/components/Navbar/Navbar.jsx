import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { LuSun, LuSunMoon } from "react-icons/lu";

const Navbar = () => {
    let { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <nav className={`navbar navbar--${theme}`}>
            <span onClick={handleThemeChange}>
                {theme === "light" ?  <LuSunMoon /> : <LuSun />}
            </span>
            <ul className="navbar__list">
                <li><a href="" className={`navbar__item navbar__item--${theme}`}>Link 1</a></li>
                <li><a href="" className={`navbar__item navbar__item--${theme}`}>Link 2</a></li>
                <li><a href="" className={`navbar__item navbar__item--${theme}`}>Link 3</a></li>
                <li><a href="" className={`navbar__item navbar__item--${theme}`}>Link 4</a></li>
            </ul>
        </nav>
    )
}

export default Navbar