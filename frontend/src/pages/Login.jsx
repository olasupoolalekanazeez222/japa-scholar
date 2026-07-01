import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/auth.css";

export default function Login(){

const navigate=useNavigate();

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

const[loading,setLoading]=useState(false);

const submit=(e)=>{

e.preventDefault();

setLoading(true);

setTimeout(()=>{

setLoading(false);

navigate("/");

},2000);

};

return(

<div className="auth-page">

<form

className="auth-card"

onSubmit={submit}

>

<div className="auth-logo">

J

</div>

<h2 className="auth-title">

Japa Community

</h2>

<p className="auth-subtitle">

Share verified relocation information.

</p>

<div className="auth-group">

<label>Email</label>

<input

type="email"

placeholder="Enter email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

</div>

<div className="auth-group">

<label>Password</label>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

</div>

<div className="auth-options">

<label>

<input type="checkbox"/>

{" "}Remember me

</label>

<Link to="#">

Forgot Password?

</Link>

</div>

<button

className="auth-btn"

disabled={loading}

>

{

loading

?

"Signing In..."

:

"Login"

}

</button>

<div className="auth-footer">

Don't have an account?

{" "}

<Link to="/signup">

<span>

Create One

</span>

</Link>

</div>

</form>

</div>

);

}