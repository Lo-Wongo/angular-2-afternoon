//create Angular controllers for locations, packages, and booked. 
//We'll then assign the new controllers to our router configuration as property in app.js
//We'll assign locationCtrl to the locations route, packagesCtrl to the packages route, and bookedCtrl to the booked route

//Let's get the data we need from mainSrvc. 
//To do this we'll need to inject mainSrvc and then call its getTravelInfo method. 
//We can then catch its response and assign its data to a new $scope variable called locations

angular.module('devmtnTravel').controller('locationsCtrl', function( $scope, mainSrvc ) {
    mainSrvc.getTravelInfo().then( function(response) {
        $scope.locations = response.data;
    });    
});

//Now that our controller is setup, we can repeat through locations on the DOM. 
//We'll want to update the ng-src in locationsTmpl.html to be the location's image and the alt to be the location's country on the img element. 
//We'll also want to update the h1 element to have a value of the location's country and update the p element to have a value of the location's desc