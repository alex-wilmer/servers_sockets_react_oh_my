# servers, sockets, react, oh my!

This repository should act as a guide for getting setup with servers that send and receive data, over HTTP with `express` and over socket protocol with `ws`.

### Quickstart

#### Install

`cd` into one of the three directories and pull the npm packages for that directory with `yarn` or `npm i`

#### Server

The servers are started with `node server`. The port is set to `8080` by default but can be reassigned using the `PORT` environment variable:

```
# example of running a server with a custom port
PORT=8888 node server
```

#### UI

The ui is run with `yarn start` or `npm start` and the components can be loaded dynamically by navigating to a URL that matches the component name:

```
# load the Http component
http://localhost:3000/Http
```
