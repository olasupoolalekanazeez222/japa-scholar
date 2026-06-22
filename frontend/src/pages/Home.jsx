import {Eye,MessageCircle} from "lucide-react";

import "../styles/home.css";
import { Link } from "react-router-dom"

function Home(){


const posts=[

{
id:1,
title:"Canada Student Visa 2027",
country:"Canada",
views:120,
messages:20
},


{
id:2,
title:"Germany Study Guide",
country:"Germany",
views:250,
messages:45
}


]


return(

<div className="home">


<section className="hero">

<h1>
Find your path abroad
</h1>

<p>
Scholarships, visas and immigration experiences from real people
</p>


</section>


<div className="posts">


{
posts.map(post=>(


<div className="post-card">


<h2>
{post.title}
</h2>


<p>
Country: {post.country}
</p>


<div className="stats">

<span>
<Eye size={16}/>
{post.views}
</span>


<span>
<MessageCircle size={16}/>
{post.messages}
</span>

</div>



<button>
View discussion
</button>


</div>


))
}



</div>


</div>


)

}


export default Home;