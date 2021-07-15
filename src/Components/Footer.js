import React,{ useEffect, useState }  from "react";
import "../Styles/Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay"; 
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../Utilities/DataLayer";

function Footer({spotify}){
    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          //console.log(r);
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });

        
      },[item]);
    
      const handlePlayPause = () => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };
    
      const skipNext = () => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
        
        spotify.skipToNext();
        
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
        
      };
    

      const skipPrevious = () => {
        spotify.skipToPrevious();
        
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
        
      };
      



    return(
        <div className= "footer">
            <div className ="footerleft"> 
                <img className = "footerAlbumLogo" 
                     src= {item?.album.images[0].url}
                     alt={item?.name} /> 
                {item? 
                    (<div className ="footerSongInfo">
                     <h4>{item.name}</h4>
                     <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div> )  
                :
                  (<div className ="footerSongInfo">
                    <h4>No song is playing</h4>
                    <p>...</p>
                  </div> )  
                }     
               
            </div> 
             
            <div className = "footercenter">
            <ShuffleIcon className="footerGreen" />
            <SkipPreviousIcon  onClick={skipPrevious}  className="footerIcon" />
            {playing ? (
                <PauseCircleOutlineIcon
                    onClick={handlePlayPause}
                    fontSize="large"
                    className="footerIcon"
                />
                ) : (
                <PlayCircleOutlineIcon
                    onClick={handlePlayPause}
                    fontSize="large"
                    className="footerIcon"
                />
        )}
            
            <SkipNextIcon onClick={skipNext} className="footerIcon" />
            <RepeatIcon className="footerGreen" />

            </div>
            <div className = "footerright">
                <Grid container spacing= {2} >
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs  >
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;