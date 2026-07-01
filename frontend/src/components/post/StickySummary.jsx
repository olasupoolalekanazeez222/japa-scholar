import "../../styles/postDetails.css";

import {

FaEye,

FaComments,

FaCalendarAlt

} from "react-icons/fa";

export default function StickySummary({post}){

return(

<div className="sticky-summary">

<div className="summary-top">

<img

src={post.avatar}

alt={post.user}

/>

<div>

<h3>{post.user}</h3>

<p>

{post.category}

</p>

</div>

</div>

<div className="summary-badge">

{post.subcategory}

</div>

<div className="summary-icons">

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

);

}