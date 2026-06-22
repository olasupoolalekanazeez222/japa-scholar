import "../styles/auth.css";
import {Mail,Lock} from "lucide-react";


function Login(){

return(

<div className="auth">


<div className="auth-box">

<h1>
Login
</h1>


<input placeholder="Email"/>


<input 
type="password"
placeholder="Password"
/>


<button>
Login
</button>


</div>


</div>


)

}

export default Login;