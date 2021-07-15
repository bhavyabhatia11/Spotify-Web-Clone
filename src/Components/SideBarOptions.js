import React from "react";
import "../Styles/sidebaroptions.css";
import { useDataLayerValue } from "../Utilities/DataLayer";
 



function SideBarOption({spotify, id, title, Icon , handlePlaylist}){
    //console.log("playylistss IDD", id);

    
    
    return (<div className="sidebarOption" >
        {Icon && <Icon className= "sidebarIcon" />}
          {Icon ? 
          <h4 > {title} </h4> :
          <p onClick={() => handlePlaylist(id)}>{title}</p>
          }
    </div>
    );
}

export default SideBarOption;