import React from "react";
import "./sidebaroptions.css";


function SideBarOption({title, Icon}){
    console.log("playy", title);
    return (<div className="sidebarOption">
        {Icon && <Icon className= "sidebarIcon" />}
      {Icon ? <h4> {title} </h4> : <p>{title}</p>}
    </div>
    );
}

export default SideBarOption;