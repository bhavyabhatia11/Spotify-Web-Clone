## Disclaimer

The Aim of this project is to learn the basics of React and Creating dynamic web applications using Context API and Redux. It also incorporates use of Spotify API for user authentication and fetching user data. Currently Spotify API does not allow to play or control songs for Non-Premium Users. hence a lot of functionality will be missing if you sign up using a free Spotify account, This is still the version 1 of the app there are still many things that could be improved.

  

## Table of Contents

-  [Description](#description)

-  [Motivation](#motivation)

-  [Tech/Framework Used](#techframework-used)

-  [Installation](#installation)

-  [Architechture](#architecture)

-  [Use case](#use-case)

  

## Description

A clone web application using the create-react-app. The app consumes data from the Spotify API and tries to mimic the UI and front-end behavior's of the official [Spotify web player](https://open.spotify.com/) as much as possible.

  

## Motivation

This project was created mainly to teach myself React development. Since the point of this project was not to make great UI/UX design choices, I chose to create a clone of a well established product as to shorten my learning time and not to focus on the wrong thing. Since I am already a heavy Spotify user and therefore I thought it would be an interesting challenge to tackle.

  

The majority of the react components and logic was written from scratch by myself. I chose not to use existing component libraries because that forces me to both get a really deep understanding of React and get as much practice as I could with React.

  

## Tech/Framework Used

* React (create-react-app CLI)

* Context API

* Spotify web API

* Firebase

  
  

## Installation

This project requires [node](http://nodejs.org) and [npm](https://npmjs.com) installed globally.

  

Clone the repository to a directory of your choosing

  

```sh

$ https://github.com/bhvya2603/Spotify-Web-Clone.git

```

Navigate into spotify-clone-client and install the necessary packages

  

```sh

$ npm install

```

To start up the app locally

  

```sh

$ npm start

```

  

## Architecture

### Authentication and Authorization

  

There are many many ways to authenticate to Spotify, but I have used Implicit authorization.

Implicit grant flow is for clients that are implemented entirely using JavaScript and running in the resource owner’s browser. Implicit Grant flow is carried out client-side and does not involve secret keys. The access tokens that are issued are short-lived and there are no refresh tokens to extend them when they expire.

  

![Implicit ](https://developer.spotify.com/assets/AuthG_ImplicitGrant.png)

  

We need to write some code that performs a couple of actions:

1. We will redirect the user to the /authorize endpoint of the Accounts service:
GET https://accounts.spotify.com/authorize

2. The user is asked to authorize access within the scopes. The Spotify Accounts service presents details of the scopes for which access is being sought. If the user is not logged in, they are prompted to do so using their Spotify username and password. When the user is logged in, they are asked to authorize access to the data sets defined in the scopes.

3. The user is redirected back to your specified URI. After the user grants (or denies) access, the Spotify Accounts service redirects the user to the redirect_uri. In this example, the redirect address is: https://spotify-clone-5a3ce.web.app/

  

![Login Flow](https://raw.githubusercontent.com/bhvya2603/Spotify-Web-Clone/master/demo/login%20flow.gif)

  
  

### Utilities and Functionalities

  

One of the most important features of the web app is that it uses Context API for state management. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

  

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

  

Different components of the app interact with each other using the same data layer and the props are updated in a single location every time a user interacts with the application.

  

![User Flow](https://github.com/bhvya2603/Spotify-Web-Clone/blob/master/demo/user%20flow.gif?raw=true)

  

As you can notice any change in the footer component (changes in next or previous songs) or the sidebar component (change of playlist) or the player(change of song) is reflected and updated in the reducer which updates the state of the other components accordingly.

  

### Use case

Currently the Spotify web API only works for premium users and the sole purpose of this project was to learn React and the principles of state management.

This app however, can realize its utility in controlling playback of the Spotify player. User can use this application to 

 1. Pause/Play songs 
 2. Shuffle Playlists
 3. Skip to Next/Previous playlists/songs
 4.  Increase/Decrease volumes

That has been playing in the Spotify mobile or web app. Also, users can navigate through their playlists and play songs that they want to hear.