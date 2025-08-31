import { Link } from 'react-router-dom';
import logo from '../../assets/escudos/inter.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <Link to="/">Principal</Link> | <Link to="/about">História</Link>
      </nav>
    </header>
  );
}

export default Header;