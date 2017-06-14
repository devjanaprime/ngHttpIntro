// declare our intentions to use an Angular module app
var myApp = angular.module( 'myApp', [] );


myApp.controller( 'HttpController', function( $http ){
  var vm = this;
  // temp start up function
  vm.startUpFunction = function(){
    console.log( 'I am here in startUpFunction!!!' );
    // get call to /songs
    $http({
      method: 'GET',
      url: '/songs'
    }).then( function( response ){
      console.log( 'back with:', response );
    }); // end http
  }; // end startUpFunction

  vm.otherGet = function(){
    console.log( 'I am here using the other get syntax' );
    $http.get( '/songs' ).then( function( response ){
      console.log( 'back with:', response );
    });
  }; // end otherGet
}); // end HttpController
