$http intro
===

make sure you include the $http service as an argument when declaring your controller function:

```
myApp.controller( 'HttpController', function( $http ){
```

2 syntaxes for $http:

classic (more like jQuery):
```
$http({
  method: 'GET',
  url: '/songs'
}).then( function( response ){
  console.log( 'back with:', response );
}); // end http
```

compact:
```
$http.get( '/songs' ).then( function( response ){
  console.log( 'back with:', response );
});
```
