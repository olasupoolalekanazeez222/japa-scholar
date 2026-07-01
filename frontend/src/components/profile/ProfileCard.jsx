import "../../styles/profile.css";
import { FaCamera } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div className="profile-card">

      <div className="avatar-section">

        <div className="profile-avatar">

          👤

        </div>

        <button className="camera-btn">

          <FaCamera />

        </button>

      </div>

      <h2>John Watson</h2>

      <p>johnwatson@email.com</p>

      <span className="member-badge">

        Community Member

      </span>

    </div>
  );
}