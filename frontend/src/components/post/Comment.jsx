import "../../styles/postDetails.css";

export default function Comment({comment}){

return(

<div

className={

comment.mine

?

"comment mine"

:

"comment"

}

>

<div className="comment-name">

{comment.user}

</div>

<div className="comment-message">

{comment.message}

</div>

<div className="comment-date">

{comment.date}

</div>

</div>

);

}