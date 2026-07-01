import "../../styles/bottomNavigation.css";

import { Link, useLocation } from "react-router-dom";

import {

FaHome,

FaPlusCircle,

FaUserCircle

} from "react-icons/fa";

export default function BottomNavigation(){

const location = useLocation();

return(

<nav className="bottom-nav">

<Link

to="/"

className={location.pathname==="/"?"active":""}

>

<FaHome/>

<span>Home</span>

</Link>

<Link

to="/create"

className={location.pathname==="/create"?"active":""}

>

<FaPlusCircle/>

<span>Create</span>

</Link>

<Link

to="/profile"

className={location.pathname==="/profile"?"active":""}

>

<FaUserCircle/>

<span>Profile</span>

</Link>

</nav>

);

}