import React, { useEffect} from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './Utilities/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Components/Player';
import {useDataLayerValue} from "./Utilities/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token,setToken] = useState(null);
  const [{ token ,user}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";  
    
    if(_token){
      
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    dispatch({
      type: "SET_SPOTIFY",
      spotify: spotify,
    });
      spotify.getMe().then((user) => {
        
        dispatch({
            type: 'SET_USER',
            user: user,
        });
      });
      spotify.getPlaylist("37i9dQZF1E36xv0q1pB1OV").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
      );
      spotify.getUserPlaylists().then((playlists)=>{
        
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }


  },[token,dispatch]);

  //console.log("user",user);
  //console.log("token",token);
  return (
    
    <div className="app">
     
       {!token && <Login />}
       {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
