import {Link} from "react-router-dom";
import {Globe, User} from "lucide-react";
import "../styles/global.css";


function Navbar(){

return(

<nav className="navbar">


<div className="logo">

<Globe size={28}/>

Japa Scholar

</div>



<div className="nav-links">

<Link to="/">Home</Link>

<Link to="/login">
Login
</Link>


<Link to="/signup">
Signup
</Link>


<Link to="/profile">

<User size={18}/>

Profile

</Link>


</div>


</nav>

)

}


export default Navbar;