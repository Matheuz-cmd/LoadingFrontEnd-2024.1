import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from '/src/assets/logo.png';
import Search from '/src/assets/search.png';
import User from '/src/assets/user.png';

export default function Header() {
  const [active, setActive] = useState(false);

  const toggleMode = () => {
    setActive(!active);
  };

  return (
    <header>
      <div className="header-desktop">
        <div className="header-top">
          <Link to="/" className="logo-wrapper">
            <img className="logo" src={Logo} alt="Logo da empresa" title="Logo da empresa" />
            <strong>Coins</strong>
          </Link>
          <div className="menu">
            <img className="search" src={Search} alt="botão de pesquisa" />
            <a href="">Newsletters</a>
            <button>Sign Up</button>
            <img className="user" src={User} alt="Avatar de login" />
          </div>
        </div>
        <div className="header-bottom">
          <nav>
            <ul className="nav-list">
              <li><a href="">Markets Monitor</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Portfolios</a></li>
              <li><Link to="/contact-us">Contact us</Link></li>
              <li><Link to="/about-us">About us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-top">
          <nav className={active ? "mobile-nav open" : "mobile-nav close"}>
            <div className="menu-icon" onClick={toggleMode}>
              <Menu />
            </div>
            <ul className={active ? "nav-list open" : "nav-list close"}>
              <li><a href="#">Markets Monitor</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Portfolios</a></li>
              <li><Link to="/contact-us">Contact us</Link></li>
              <li><Link to="/about-us">About us</Link></li>
            </ul>
          </nav>
          <Link to="/" className="logo-wrapper">
            <img className="logo" src={Logo} alt="Logo da empresa" title="Logo da empresa" />
            <strong>Coins</strong>
          </Link>
          <div className="menu">
            <img className="search" src={Search} alt="botão de pesquisa" />
            <button>Sign Up</button>
            <img className="user" src={User} alt="Avatar de login" />
          </div>
        </div>
      </div>
    </header>
  );
}
