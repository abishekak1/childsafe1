/**
 * Created by ZhangHuan on 26/08/2016.
 */

(function () {
    var module = angular.module("angular-google-maps-example", ["google-maps"])
        ;


}());

function ExampleController ($scope, $http, $filter) {

    $http.get('resources/data/map-data.json').success(function(data) {
        $scope.places = data;
        $scope.markersProperty = data;
        $scope.filteredMarkersProperty = $scope.markersProperty;
        $scope.geolocationAvailable = navigator.geolocation ? true : false;



            // if ($scope.geolocationAvailable) {
            //
            //     navigator.geolocation.getCurrentPosition(function (position) {
            //
            //         $scope.centerProperty = {
            //             lat: position.coords.latitude,
            //             lng: position.coords.longitude
            //         };
            //
            //        // $scope.$apply();
            //     }, function () {
            //
            //     });
            // }


        var cats = [];
        for (var i = 0; i < data.length; i++){
            cats[i] = data[i].category;
        }

        var sorted_cats = cats.sort();

        $scope.categories = [];
        for (var i = 0; i < cats.length; i++){
            if (sorted_cats[i+1] != sorted_cats[i]){
                $scope.categories.push(sorted_cats[i]);
            }
        }



    }); //End Data Grab
    //Start Extra Functions for Controller

    $scope.$watch( 'orderProp', function ( val ) {
        $scope.filteredMarkersProperty = $filter('filter')($scope.markersProperty, val);
        $scope.zoomProperty = 12;
        calcFocus();
    });

    $scope.showAll = function($event){
        $scope.orderProp ="0";
        $scope.filteredMarkersProperty = $scope.places;
        $scope.zoomProperty = 12;
        calcFocus();

    }

    $scope.select = function($event){
        var theName = $event.name;
        var lat = $event.latitude;
        var lng = $event.longitude;
        $scope.filteredMarkersProperty = [$event];
        $scope.centerProperty.lat = lat;
        $scope.centerProperty.lng = lng;
        $scope.zoomProperty = 14;
        calcFocus();

    }
    function calcFocus(){
        // var lats = [], longs = [], counter = [];
        //
        // for(i=0; i<$scope.filteredMarkersProperty.length; i++)
        // {
        //     lats[i] = $scope.filteredMarkersProperty[i].latitude;
        //     longs[i] = $scope.filteredMarkersProperty[i].longitude;
        // }
        //
        // var latCount = 0;
        // var longCount = 0;
        //
        // for (i=0; i<lats.length; i++){
        //     latCount += lats[i];
        //     longCount += longs[i];
        // }

        if ($scope.geolocationAvailable) {

            navigator.geolocation.getCurrentPosition(function (position) {

                $scope.centerProperty = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // $scope.$apply();
            }, function () {

            });
        }

        alert($scope.centerProperty.lat+"   , "+ $scope.centerProperty.lng);

        // latCount = latCount / lats.length;
        // longCount = longCount / longs.length;
        // $scope.centerProperty.lat = latCount;
        // $scope.centerProperty.lng = longCount;
    };


    angular.extend($scope, {


        /** the initial center of the map */
        centerProperty: {
            lat:-38.031367,
            lng:145.346996
        },

        /** the initial zoom level of the map */
        zoomProperty: 12,

        /** list of markers to put in the map */

        markersProperty : [],

        // These 2 properties will be set when clicking on the map - click event
        clickedLatitudeProperty: null,
        clickedLongitudeProperty: null
    });


}
