// Refactor your music library code so that the functions that operate on the library object are properties of the library object (instead of being independent functions). In other words, turn them into methods on the library object.

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
             },
  printPlaylists: function () {
    const playlistKeys = Object.keys(this.playlists); 
    playlistKeys.forEach((playlistId) => { 
           const playlist = this.playlists[playlistId];
           const playlistName = playlist.name; 
           const numberOfTracks = playlist.tracks.length;            

           console.log(`${playlistId}: ${playlistName} - ${numberOfTracks} tracks` );
    })
  },    
  printTracks: function () {
    const tracksKeys = Object.keys(this.tracks);
    tracksKeys.forEach((trackId) => {
      const track = this.tracks[trackId];
      const trackName = track.name; 
      const trackArtist = track.artist;
      const trackAlbum = track.album;
      
      console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    });
  }, 
  printPlaylist: function (playlistId) {
    const playlist = (this.playlists[playlistId]);
    console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks `);
    playlist.tracks.forEach((tracksId) => {
      const track = this.tracks[tracksId];
      const trackNum = track.id;
      const trackName = track.name;
      const trackArtist = track.artist; 
      const trackAlbum = track.album;
      console.log(`${trackNum}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    });
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    if (this.tracks[trackId] && this.playlists[playlistId]) {
      const playlist = this.playlists[playlistId]; 
      
      if (!playlist.tracks.includes(trackId)) {
        playlist.tracks.push(trackId); //uses push because its an array
        console.log(`Track ${trackId} added to the playlist ${playlistId}`);
      } else { 
        console.log(`Track ${trackId} is already in the playlist ${playlistId}`);
      } 
      console.log(`Updated Playlist (${playlistId}):`, playlist);
    } else {
        console.log("Track or Playlist not found");
    }
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

}
  


//library.printPlaylists(); 
//library.printTracks();
//library.printPlaylist('p01');
// library.addTrackToPlaylist( "t03","p01");
//(library.generateUid());


