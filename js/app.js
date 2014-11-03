/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

// create new angular module
angular.module('MovieApp', [])// empty array, creates an angular module, returned module
    .controller('MoviesController', function($scope) { // controller for this module
        $scope.movies = movies;   // initialize scope so that it sets it equal to the movies array
        $scope.searchString = ''; // scope is an object, create new property ".movies" on scope object so that we can
                                  // refer to it whenever we want
        $scope.sortReverse = false;
        $scope.sortCol = 'rank';
        $scope.sortBy = function(colName) {
            if ($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse
            } else {
                $scope.sortReverse = false;
            }
            $scope.sortCol = colName; // capture column name that we want to sort
        }


    });

