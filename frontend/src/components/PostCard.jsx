
function PostCard({post}){


return(

<div>


<h2>
{post.title}
</h2>


<p>

{post.description}

</p>


<p>

Posted by:

{post.user.name}

</p>



<p>

Country:

{post.country.name}

</p>


<p>

Visa:

{post.visa_type.name}

</p>


<p>

Views:

{post.views}

</p>



</div>

)


}


export default PostCard;