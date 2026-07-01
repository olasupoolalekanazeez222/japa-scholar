import "../../styles/loader.css";

export default function Loader(){

return(

<div className="loader">

{

[...Array(8)].map((_,index)=>(

<div

className="loader-card"

key={index}

>

<div className="loader-avatar"/>

<div className="loader-title"/>

<div className="loader-line"/>

<div className="loader-line short"/>

</div>

))

}

</div>

);

}