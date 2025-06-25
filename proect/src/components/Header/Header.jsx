import './Header.scss';
import LogoIcon from '../Icons/LogoIcon.jsx';
import IconBag from '../Icons/IconBag.jsx';
import IconHeart from '../Icons/IconHeart.jsx';
import ThemeToggle from '../Theme/ThemeToggle.jsx';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
            <LogoIcon />
          </div>
        <div className="logo-switch">
          <ThemeToggle />  
        </div>

        <div className="nav-group">
          <div className="discount">1 day discount</div>
          <nav>
            <ul>
              <li>Main Page</li>
              <li>Categories</li>
              <li>All products</li>
              <li>All sales</li>
            </ul>
          </nav>
        </div>

        <div className="icons">
          <IconHeart />
          <IconBag />
        </div>
      </div>
    </header>
  );
};

export default Header;