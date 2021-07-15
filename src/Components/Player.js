import React from 'react';
import "../Styles/Player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer"
function Player({spotify}) {
    return (
        <div className="player" >
            <div className = "player_body">
                <SideBar spotify ={spotify}/>
                <Body spotify ={spotify}/>
            </div>
            <div>
                <Footer spotify ={spotify} />
            </div>
        </div>
    );
}

export default Player;