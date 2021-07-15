import React from "react";
import "../Styles/Body.css";
import { useDataLayerValue } from "../Utilities/DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow"


function Body({spotify}){
    const [{discover_weekly} , dispatch] = useDataLayerValue();
    
    ///console.log("ejfeif", discover_weekly?.id);
  
    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:${discover_weekly?.id}`,
          })
          
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
         
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
       
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
      };
    return(
        <div className= "body">
            <Header  spotify = {spotify} />
            <div className="bodyInfo">
                <img src= {discover_weekly?.images[0]?.url} alt ="" />
                <div className ="infoText">
                    <strong>PLAYLIST</strong>
                    <h1> {discover_weekly?.name} </h1>
                    <p> {discover_weekly?.description} </p>
                </div>
            </div>

            <div className= "bodySongs">
                <div className="bodyIcons">
                    <PlayCircleFilledIcon className ="bodyShuffle"
                    onClick={playPlaylist} onClick={playPlaylist} 
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow playSong={playSong} playSong={playSong}  track={item.track} />
                ))}
            </div>
            
        </div>
        
    );
}

export default Body;