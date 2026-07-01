import { Link } from "react-router-dom";
import "../../styles/profile.css";

export default function ProfilePostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="profile-post-card">

      <div className="profile-post-header">

        <span className="profile-category">
          {post.category}
        </span>

        <span className="profile-subcategory">
          {post.subcategory}
        </span>

      </div>

      <h3>{post.title}</h3>

      <p>
        {post.intro}
      </p>

      <div className="profile-post-footer">

        <span>👁 {post.views}</span>

        <span>💬 {post.comments}</span>

        <span>{post.date}</span>

      </div>

    </Link>
  );
}