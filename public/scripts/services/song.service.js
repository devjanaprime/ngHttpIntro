myApp.service('SongService', function($http){

  sv = this;

  sv.name = 'Huck';

  sv.songList = {
    songs: []
  }


  sv.getSongs = function(){
    console.log( 'I am here in song service!!!' );
    // get call to /songs
    return $http({
      method: 'GET',
      url: '/songs'
    }).then( function( response ){
      console.log( 'back with:', response );
      //Will be available in SongService.getSongs, but not elsewhere
      sv.songList.songs = response.data
    }); // end http

  }; // end startUpFunction

  this.hello = function(){
    console.log("Hello from Service");
  }

})
