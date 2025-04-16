// You need to implement the Playlist constructor function and its prototype method

function Playlist() {
    // Initialize songs property
    this.songs = [];
}


// Define addSong method on Playlist's prototype
Playlist.prototype.addSong=function(song){
  this.songs.push(song)
}

// Example usage:
let myPlaylist = new Playlist();
myPlaylist.addSong("Song 1");
myPlaylist.addSong("Song 2");

console.log(myPlaylist.songs);