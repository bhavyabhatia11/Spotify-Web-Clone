import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import {useDataLayerValue } from "../Utilities/DataLayer"
import { useEffect } from "react";

function Header({spotify}){
    const [{ user }, dispatch] = useDataLayerValue();
    return(
        

        <div className= "header">
            <div className="headerLeft">
                <SearchIcon />
                <input 
                    placeholder="Search for Artists,Songs or Podcasts"
                    type= "text"
                 />   
            </div>
            <div className="headerRight">
                <Avatar src = {user?.images[0]?.url}  alt= {user?.display_name} />
                <h4>
                    {user?.display_name}
                </h4>
            </div>
            
        </div>
    );
}

export default Header;