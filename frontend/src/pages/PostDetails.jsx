import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";
import Loader from "../components/layout/Loader";

import StickySummary from "../components/post/StickySummary";
import Comment from "../components/post/Comment";
import CommentInput from "../components/post/CommentInput";

import { getPost } from "../data/postStore";
import commentsData from "../data/comments";

import "../styles/postDetails.css";

export default function PostDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [post, setPost] = useState(null);

  const [comments, setComments] = useState([]);

  useEffect(() => {

    const timer = setTimeout(() => {

      const selectedPost =  getPost(id);

      setPost(selectedPost);

      setComments([...(commentsData[Number(id)] || [])]);

      setLoading(false);

    }, 2000);

    return () => clearTimeout(timer);

  }, [id]);

  const handleSend = (message) => {

    const newComment = {

      id: Date.now(),

      user: "You",

      message,

      date: new Date().toLocaleString(),

      mine: true

    };

    setComments((prev) => [...prev, newComment]);

  };

  if (loading) {

    return (
      <>
        <Header />
        <Loader />
        <BottomNavigation />
      </>
    );

  }

  if (!post) {

    return (
      <>
        <Header />

        <div className="article">

          <h2>Post not found.</h2>

          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Go Home
          </button>

        </div>

        <BottomNavigation />

      </>
    );

  }

  return (

    <div className="post-page">

      <Header />

      <StickySummary post={post} />

      <div className="article">

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1>{post.title}</h1>

        <p>{post.body}</p>

      </div>

      <div className="comments">

        <h2 style={{ color: "white", marginBottom: "15px" }}>
          Comments ({comments.length})
        </h2>

        {comments.map((comment) => (

          <Comment
            key={comment.id}
            comment={comment}
          />

        ))}

      </div>

      <CommentInput onSend={handleSend} />

      <BottomNavigation />

    </div>

  );

}