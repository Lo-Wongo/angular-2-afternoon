//configure the router to handle all the other provided templates
//provided templates are located in the feature folders (about, booked, locations, packages) found in the app folder
//We add more routes to our configuration by chaining on more '.state'

//Notice that the packages route is expecting a country parameter. 
//Also, if we take a look at our data in mainSrvc we can see that our package objects have a property called country.
//Therefore, we can use {{ package.country }} in the DOM to fix our ui-sref link 
//To add parameters in a ui-sref in bookedTmpl.html all we need to do is add ({ paramName: paramValue }) next to the route name.  -->


angular.module('devmtnTravel', ['ui.router']).config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'app/about/aboutTmpl.html'
    })
    .state('packages', {
      url: '/packages/:country',
      templateUrl: 'app/packages/packagesTmpl.html',
      controller: 'packagesCtrl'
    })
    .state('locations', {
      url: '/locations',
      templateUrl: 'app/locations/locationsTmpl.html',
      controller: 'locationsCtrl'
    })
    .state('booked', {
      url: '/booked/:id',
      templateUrl: 'app/booked/bookedTmpl.html',
      controller: 'bookedCtrl'
    })
    .state('adventurers', { //this route is a sub-route of the home page
      url: '/adventurers',
      templateUrl: 'app/about/adventurers/adventurersTmpl.html',
      parent: 'home'
    })
    .state('contact', { //this route is a sub-route of the home page
      url: '/contact',
      templateUrl: 'app/about/contact/contactTmpl.html',
      parent: 'home'
    });

  $urlRouterProvider
    .otherwise('/');
});