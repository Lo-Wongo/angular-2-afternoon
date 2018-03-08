//create Angular controllers for locations, packages, and booked. 
//We'll then assign the new controllers to our router configuration as property in app.js
//We'll assign locationCtrl to the locations route, packagesCtrl to the packages route, and bookedCtrl to the booked route

//completing the booked feature. 
        //The booked feature is designed to work by getting an id from the URL. 
        //It will then find the corresponding package object with the same id and assign that object on $scope
//Let's begin by get the data we need from mainSrvc. 
        //To do this we'll need to inject mainSrvc and then call its getPackageInfo method. 
        //We'll then want to capture its response and put our async logic inside of there. 
                //The first thing we'll want to do is assign $scope.allPackages to the response's data
//Using this packages array, we can search through it and find the package object that has the same id as the id in the URL. 
        //In order to be able to read the id from the URL, we'll need to inject $stateParams into the controller.

//The logic that goes with $stateParams. 
        //We now have access to $stateParams.id ( the id in the URL ) and the packages array ( $scope.allPackages ). 
        //We can add an if statement to check if the page was loaded with an id in the URL. 
        //If it was, we can get the index of the package object in $scope.allPackages by using the findIndex Array method.

        //$scope.packageIndex will either be assigned the index of the package object in $scope.allPackages or -1 if it is not found in the array. 
        //We can use this as another conditional to assign a new $scope variable called $scope.package
angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrvc) {
    mainSrvc.getPackageInfo().then( function(response) {
        $scope.allPackages = response.data;

        if ( $stateParams.id) {
            $scope.packageIndex = $scope.allPackages.findIndex( function(package) {
                return package.id === parseInt( $stateParams.id );
            });

            if ( $scope.packageIndex !== -1 ) {
                $scope.package = $scope.allPackages[ $scope.packageIndex ];
            }
        }
    });   
});

//Now that our controller is setup, we can open the template HTML and add the package's city and country to the DOM. 
//We'll also add a ng-style to the parent section element to set the background-image to the package's image. 
//When using ng-style the syntax follows: { 'css-property': 'css-value' }. You can use {{}} to insert $scope.values into ng-style