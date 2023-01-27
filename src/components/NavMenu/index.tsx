import { Link } from "react-router-dom";
import './style.scss'

export function NavMenu() {
  return (
      <nav className="nav-menu" >        
        <div className="links">
          <Link to="/home" className="home-link">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </nav>
  );
}