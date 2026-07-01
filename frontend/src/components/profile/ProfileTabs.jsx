import "../../styles/profile.css";

export default function ProfileTabs({

activeTab,

setActiveTab

}){

return(

<div className="profile-tabs">

<button

className={

activeTab==="posts"

?

"active"

:

""

}

onClick={()=>setActiveTab("posts")}

>

My Discussions

</button>

<button

className={

activeTab==="comments"

?

"active"

:

""

}

onClick={()=>setActiveTab("comments")}

>

My Comments

</button>

<button

className={

activeTab==="settings"

?

"active"

:

""

}

onClick={()=>setActiveTab("settings")}

>

Settings

</button>

</div>

);

}