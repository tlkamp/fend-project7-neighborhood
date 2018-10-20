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

### Starting the Local Server
_If_ you want to run the app locally instead of using the deployed version, follow the instructions below for the server you wish to use.

1. Ensure Node and NPM are installed.
2. Clone or download this repository - note the location where the files are stored.
3. Open a terminal in the location where the files are stored and run: `$ npm install`

#### The Dev Server
To run the development version of the app, use the following commands:
```shell
$ npm start
```
 A browser window should open and take you to the site. If it doesn't, you can navigate to [`localhost:3000`](http://localhost:3000) (or click the link!).

 **Note:** The service worker won't cache files served by the development server. Use the build server instead to enable service worker caching.

 #### The Production Build Server
 To run the production build server, complete with service worker caching, perform the following actions:
1. Delete the homepage entry from [`package.json`](package.json)
2. Run the following commands:

 ```shell
$ npm install -g serve
$ npm run build && serve -s build
 ```

 When the server is started, navigate to [`localhost:5000`](http://localhost:5000) in your browser.

### Stopping the Local Server
To stop the server, hit `control + c` in the terminal window where it is running.