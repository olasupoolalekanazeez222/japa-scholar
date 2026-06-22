import { useParams } from "react-router-dom"

function PostDetail() {

  const { id } = useParams()

  return (
    <div style={{ padding: "20px" }}>

      <h1>Post Detail Page</h1>

      <h3>Post ID: {id}</h3>
  
      <p>This is where full post content will appear</p>

      <hr />

      <h3>Comments Section (Placeholder)</h3>

      <p>No comments yet</p>

      <input placeholder="Write comment..." />
      <button>Send</button>

    </div>
  )
}

export default PostDetail