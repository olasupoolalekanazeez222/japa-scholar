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

<Link

to={`/post/${post.id}`}

className="post-card"

>

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

<span className="pathway">

{post.subcategory}

</span>

<h3>

{post.title}

</h3>

<p>

{post.intro}

</p>

<div className="read-more">

Read More

<FaArrowRight/>

</div>

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

</Link>

);

}