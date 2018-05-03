require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var request = require('request');


//this holds the keys to twitter and spotify

var keys = require("./keys.js");


//plant it in random.txt

var nodeArgs = process.argv;
var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

// Create an empty variable for holding the movie name
var songSelected = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    songSelected = songSelected + "+" + nodeArgs[i];

  }

  else {

    songSelected += nodeArgs[i];

  }
}

//running spotify

request(spotify, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});


fs.writeFile("random.txt", songSelected, function(err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
  
    // Otherwise, it will print: "movies.txt was updated!"
    console.log("random.txt was updated!");
  
  });


// importing the keys and junk


function spotify (artist, song_name, link, album){
    this.artist = artist;
    this.song_name = song_name;
    this.link = link;
    this.album = album;
};

function twitter (tweets){
this.tweets;
};

// var spotify = new spotify(keys.spotify);
// var client = new twitter(keys.twitter);



console.log("doesthiswork");