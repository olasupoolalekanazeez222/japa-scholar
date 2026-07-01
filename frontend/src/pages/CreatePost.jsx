import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";

import { categories, subcategories } from "../data/posts";
import { addPost } from "../data/postStore";

import "../styles/createPost.css";

export default function CreatePost() {

  const navigate = useNavigate();

  const [country, setCountry] = useState(categories[0]);

  const [pathway, setPathway] = useState(subcategories[0]);

  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

    if (!title.trim()) {

      alert("Please enter a title.");

      return;

    }

    if (!body.trim()) {

      alert("Please write your discussion.");

      return;

    }

    setLoading(true);

    setTimeout(() => {

      addPost({

        id: Date.now(),

        user: "You",

        avatar: "https://i.pravatar.cc/150?img=10",

        title,

        intro: body.substring(0,150) + "...",

        body,

        category: country,

        subcategory: pathway,

        views: 0,

        comments: 0,

        bookmarked:false,

        date:new Date().toLocaleDateString()

      });

      alert("Discussion Published Successfully!");

      navigate("/");

    },2000);

  };

  return (

    <>

      <Header/>

      <div className="create-page">

        <h2>Create Discussion</h2>

        <label>Country</label>

        <select

          value={country}

          onChange={(e)=>setCountry(e.target.value)}

        >

          {

            categories.map((item)=>(

              <option key={item}>{item}</option>

            ))

          }

        </select>

        <label>Pathway</label>

        <select

          value={pathway}

          onChange={(e)=>setPathway(e.target.value)}

        >

          {

            subcategories.map((item)=>(

              <option key={item}>{item}</option>

            ))

          }

        </select>

        <label>Title</label>

        <input

          value={title}

          onChange={(e)=>setTitle(e.target.value)}

          placeholder="Discussion title"

        />

        <label>Discussion</label>

        <textarea

          rows="8"

          value={body}

          onChange={(e)=>setBody(e.target.value)}

          placeholder="Share your experience with the community..."

        />

        <div className="counter">

          {body.length} / 5000

        </div>

        <button

          className="publish-btn"

          disabled={loading}

          onClick={handleSubmit}

        >

          {

            loading

            ?

            "Publishing..."

            :

            "Publish Discussion"

          }

        </button>

      </div>

      <BottomNavigation/>

    </>

  );

}