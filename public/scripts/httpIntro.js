// declare our intentions to use an Angular module app
var myApp = angular.module( 'myApp', [] );


myApp.controller( 'HttpController', function( SongService ){
  var vm = this;
  vm.songList = [];

  console.log(SongService.name);


  SongService.getSongs().then(function(whatCameBackFromPromise){
    console.log(whatCameBackFromPromise);
    vm.songList = SongService.songList.songs
  })
  // temp start up function
  vm.startUpFunction = SongService.hello;

}); // end HttpController
