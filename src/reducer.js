//import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //token:'BQCHcLYLIDiHq0sbiU5JfF-ibHD8rbOC68AABZSWLI0wnNDbDjIfjC6BwXyQB7lNwRZ9ZRJzMdEnn7P_5W_WzagpUqgDTgmi1tw3wHxyzRC0CUZC5UvGEDcZLXKQZdgaV2tSvZ-L9DdOu9tZ3_AGJUFWhgX2B_tqMR2OzhBI901ObpwJ',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
      case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
      case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }  
    default:
      return state;
  }
};

export default reducer;