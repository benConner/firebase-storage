console.log('hi')

const app = angular.module('cuteApp', ['ngRoute'])

// Initialize Firebase
 firebase.initializeApp({
  apiKey: "AIzaSyDUFkQvFGpTkNsd0ZvlOUCYiuKSuD6YXUw",
  authDomain: "fir-storage-e8e40.firebaseapp.com",
  databaseURL: "https://fir-storage-e8e40.firebaseio.com",
  storageBucket: "fir-storage-e8e40.appspot.com",
  messagingSenderId: "762840944047"
});



app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: 'partials/home.html'
    })

})
