import React from "react";
import "./SideBar.css";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useDataLayerValue } from "./DataLayer";


function SideBar({spotify}){
    const [{playlists}, dispatch] = useDataLayerValue();
    
    
    console.log("nooo ", playlists);
    return(
        <div className="sidebar">
           <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      /> 
        <SideBarOptions Icon = {HomeIcon} title= "Home" />
        <SideBarOptions Icon =  {SearchIcon} title= "Search" />
        <SideBarOptions Icon =  {LibraryMusicIcon} title= "Your Library" />


        <br />
        <strong className= "sidebarTitle"> PLAYLISTS</strong>
        <hr />

  
        {playlists?.items?.map((playlist) => (
          console.log("dumdum", playlist),
        <SideBarOptions title={playlist.name} />
      ))}

        
        
        </div>
    );
}

export default SideBar;