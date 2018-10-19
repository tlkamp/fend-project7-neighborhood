# Neighborhood Map
A map of my stops during my recent vacation to [Iceland](https://www.inspiredbyiceland.com/). All photographs used were taken by me and hosted on [Unsplash](https://unsplash.com/tlkamp).

This app is bootstrapped with [`create-react-app`](https://www.npmjs.com/package/create-react-app).

## Dependencies
* [ReactJS](https://reactjs.org/) - the UI Framework.
* [`reactstrap`](https://reactstrap.github.io/) and [Bootstrap](http://getbootstrap.com/) - for the style.
* [`google-map-react`](https://www.npmjs.com/package/google-map-react) and [Google Maps](https://developers.google.com/maps/documentation/) - Google Maps API wrapped into React Components.
* [Unsplash](https://unsplash.com/) - for image hosting/retrieval.
* [`gh-pages`](https://www.npmjs.com/package/gh-pages) - for deploying this React app to GitHub pages.

## Viewing the App
This app is hosted with GitHub pages: https://tlkamp.github.io/fend-project7-neighborhood/

#### Starting the Dev Server
_If_ you want to run the app locally, follow these instructions:
1. Ensure Node and NPM are installed.
2. Clone or download this repository - note the location where the files are stored.
3. Open a terminal in the location where the files are stored and run:

```shell
$ npm install && npm start
```
 A browser window should open and take you to the site. If it doesn't, you can navigate to [`localhost:3000`](http://localhost:3000) (or click the link!).

 *Note:* The service worker won't cache files served by the development server.

#### Stopping the Dev Server
To stop the server, hit `control + c` in the terminal window where it is running.