// ======================================================
// Single Post Card
// ======================================================

import "../../styles/PostCard.css";

import {

FaEye,

FaComments,

FaCalendarAlt,

FaArrowRight

} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function PostCard({post}){

    return(

        <div className="post-card">

            {/* Top */}

            <div className="post-user">

                <img

                    src={post.avatar}

                    alt={post.user}

                />

                <div>

                    <h4>{post.user}</h4>

                    <small>

                        {post.category}

                    </small>

                </div>

            </div>

            {/* Pathway */}

            <span className="badge">

                {post.subcategory}

            </span>

            {/* Title */}

            <h3>

                {post.title}

            </h3>

            {/* Intro */}

            <p>

                {post.intro}

            </p>

            {/* Read More */}

            <Link

                to={`/post/${post.id}`}

                className="read-more"

            >

                Read More

                <FaArrowRight/>

            </Link>

            {/* Footer */}

            <div className="post-footer">

                <span>

                    <FaEye/>

                    {post.views}

                </span>

                <span>

                    <FaComments/>

                    {post.comments}

                </span>

                <span>

                    <FaCalendarAlt/>

                    {post.date}

                </span>

            </div>

        </div>

    )

}