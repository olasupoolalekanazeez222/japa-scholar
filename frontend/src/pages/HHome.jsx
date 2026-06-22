import { useEffect, useState } from "react";
import PostCard from "../Components/PostCard";



function HHome(){
    // fetch from the database using api 
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/posts")
        .then(res=>res.json())
        .then(data=>{
            setPosts(data.data);
        });
    }
    ,[]);

return (
    <div>
    <h1>
        japa scholar
    </h1>
    <div>
        {posts?.map(post=>{
         return   <PostCard key={post.id} post={post} />
        })}
    </div>
    </div>
)

}
export default HHome;