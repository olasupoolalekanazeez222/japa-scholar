import { Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
// Temporary placeholder pages until we build them
//function PostDetails() {
 // return <h2>Post Details Page (Coming Next)</h2>;
//}

//function Signup() {
 // return <h2>Signup Page</h2>;
//}

//function Profile() {
//  return <h2>Profile Page</h2>;
//}

//function CreatePost() {
// return <h2>Create Post Page</h2>;
//}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  );
}

export default App;