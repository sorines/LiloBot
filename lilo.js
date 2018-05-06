require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var request = require('request');
var inquirer = require('inquirer');

//this holds the keys to twitter and spotify

var keys = require("./keys.js");


//plant it in random.txt

var nodeArgs = process.argv;
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// this will transfer to the random.txt file and will cut out node and file name
var nodeArgs = process.argv;
var songSelected="";

for (var i = 2; i < nodeArgs.length; i++) {

  // this will just be the song selected in the random.txt
  songSelected = songSelected + " " + nodeArgs[i];
}

//this will hold everything we enter into the random.txt. It captures it. 

fs.appendFile("random.txt", "\n"+songSelected, function(err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
  
    // Otherwise, it will print: "random.txt was updated!"
    console.log("random.txt was updated!");
  
  });

//this is taken from npm spotify its suppose to print out my artist but its not doing that. fan-freaking-tastic.

  spotify
  .search({ type: 'artist', type: 'album', query: 'My search query' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });

// });

// lets see if twitter works...
// You can also get the stream in a callback if you prefer.
client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
  console.log(tweets);
});




