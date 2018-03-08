//Setup the mainSrvc to call on a live API for travel and package data
//add it to the list of scripts in index.html
//inject $http into the function below
//We'll need two methods in this service. 
        //One for hitting the travel-info endpoint and one for hitting the package-info endpoint


angular.module('devmtnTravel').service('mainSrvc', function($http) {

    //The travel-info endpoint will give us the data we'll need to populate the locations template
    //The package-info endpint will give us the data we'll need to populate the packages template. 

    //We want to design these methods so they return a promise. 
    //This will allow us to do asynchronous code in the controllers. 
    //Luckily, $http can do this for us. When calling $http it automagically returns a promise. 
    //Knowing this, we can have our functions return the $http call. 
    //Using the provided url, we know we need to make a GET call to: https://practiceapi.devmountain.com/api/travel/travel-info and https://practiceapi.devmountain.com/api/travel/package-info
  

    this.getTravelInfo = function() { //travel-info endpoint
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/travel/travel-info'
        });
    };

    this.getPackageInfo = function() { //package-info endpoint
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/travel/package-info'
        });
    };
});

//Now that the service is completed, let's add it into index.html so our controllers will be able to inject and use it.
//like this; <script src="app/mainSrvc.js"></script>