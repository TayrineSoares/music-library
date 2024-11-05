const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


const printPlaylists = function(object) {
        const playlistKeys = Object.keys(object.playlists); // returns an array of keys from the playlists object
       playlistKeys.forEach((playlistId) => { // sets up an iteration, where the function inside forEach is executed once for each element in playlistKeys.
              const playlist = object.playlists[playlistId];
              const playlistName = playlist.name; 
              const numberOfTracks = playlist.tracks.length;            
   
              console.log(`${playlistId}: ${playlistName} - ${numberOfTracks} tracks` );
       });      
}; 
//printPlaylists(library);


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(object) {
       const tracksKeys = Object.keys(object.tracks); 
       //console.log(tracksKeys);
       tracksKeys.forEach((tracksId) => {
              const tracksIndKey = object.tracks[tracksId];
              const tracksName = tracksIndKey.name; 
              const artistName = tracksIndKey.artist; 
              const albumName = tracksIndKey.album;

       console.log(`${tracksId}: ${tracksName} by ${artistName} (${albumName})`)
       });
}

//printTracks(library);


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       const playlist = library.playlists[playlistId];
       console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`); 

       playlist.tracks.forEach((tracksId) => {
              const track = library.tracks[tracksId];
              const trackNum = track.id;
              const trackName = track.name;
              const trackArtist = track.artist;
              const trackAlbum = track.album;


              console.log(`${trackNum}: ${trackName} by ${trackArtist} (${trackAlbum}) `);
       });

}
// printPlaylist('p01');
// printPlaylist('p02');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

       if (library.tracks[trackId] && library.playlists[playlistId]) { // checks if tracks and playlist exist in the library
              const playlist = library.playlists[playlistId]; 
              //console.log(playlist);
              if (!playlist.tracks.includes(trackId)) { //checking that the track doesnt already exist 
                     playlist.tracks.push(trackId); // pushes the new track to the playlist 
                     console.log(`Track ${trackId} added to playlist ${playlistId}`);
              } else {
                     console.log(`Track ${trackId} is already in playlist ${playlistId}`);
              }
                 } else {
                   console.log("Track or Playlist not found");
                 }
               }
addTrackToPlaylist("t03", "p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}