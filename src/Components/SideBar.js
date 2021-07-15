import React from "react";
import "../Styles/SideBar.css";
import SideBarOptions from "./SideBarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import { useDataLayerValue } from "../Utilities/DataLayer";


function SideBar({spotify}){
    const [{playlists}, dispatch] = useDataLayerValue();
    
    
    //console.log("nooo ", playlists);

    const handlePlaylist = (id) => {
      console.log("Working",spotify);
      spotify.getPlaylist(id).then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
      );

    };
   
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
         
          <SideBarOptions title={playlist.name} id ={playlist.id} handlePlaylist ={handlePlaylist}/>
      ))}

        
        
        </div>
    );
}

export default SideBar;