//create Angular controllers for locations, packages, and booked. 
//We'll then assign the new controllers to our router configuration as property in app.js
//We'll assign locationCtrl to the locations route, packagesCtrl to the packages route, and bookedCtrl to the booked route

//completing the packages feature. 
//The packages feature is designed to show all available packages by country.

        //We'll need access to the package ID in the URL and access to the getPackageInfo method on mainSrvc.js. 
        //So let's inject $stateParams and mainSrvc into the controller

//Now that we have access to these things, we can call then getPackageInfo and catch its response. 
//Inside our catch, we can assign a new $scope variable called allPackages that equals the response's data. 
//We'll also need another $scope variable called package. 
//We can determine the value of package by filtering $scope.allPackages by country. 
//Remember that this page is loaded with a URL parameter called country

angular.module('devmtnTravel').controller('packagesCtrl', function( $scope, $stateParams, mainSrvc ) {
    mainSrvc.getPackageInfo().then( function( response ) {
      $scope.allPackages = response.data;
      if ( $stateParams.country ) {
          $scope.packages = $scope.allPackages.filter( function( package ) {
              return package.country === $stateParams.country;
            });
        }
        console.log($scope.allPackages);
    });
  });

//We can then use $scope.packages with an ng-repeat to show all the packages on the DOM. 
//open packagesTmpl.html and locate the section element with the class of package-card. 
//add an ng-repeat through packages on this element. We will also the following elements inside of package-card