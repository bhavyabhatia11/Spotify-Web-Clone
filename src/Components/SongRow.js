import React from "react";
import "../Styles/SongRow.css";


function SongRow({ track, playSong}) {
    return (
    <div className ="songrow" onClick={() => playSong(track.id)}>
        <img className ="songrowAlbum" src= {track.album.images[0].url} alt ="" />
        <div className= "songrowInfo">
            <h1>
                {track.name}
            </h1>
            <p>
                {track.artists.map((artist) => artist.name).join(",")}
                {track.album.name}
            </p>
        </div>

    </div>)
        
}

export default SongRow;