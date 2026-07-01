import "../../styles/Header.css";
import { FaBell, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <div className="logo-circle">
          J
        </div>

        <div>

          <h2>JAPA Community</h2>

          <p>Share • Learn • Relocate</p>

        </div>

      </div>

      <div className="header-right">

        <button className="header-icon">

          <FaSearch />

        </button>

        <button className="header-icon">

          <FaBell />

        </button>

      </div>

    </header>
  );
}