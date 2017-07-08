var path = require('path');
var APP_DIR = path.resolve(__dirname, './react_app')
var BUILD_DIR = path.resolve(__dirname, './public')

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./react_app/main.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        loader: "babel-loader",
        include: APP_DIR,
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
