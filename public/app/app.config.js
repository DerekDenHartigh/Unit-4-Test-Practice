"use strict";

angular.module("MovieApp")
.config(["$routeProvider", ($routeProvider) => {
    $routeProvider
    .when("/home", {
        template: "<home></home>"
    })
    .when("/hero", {
        template: "<hero></hero>"
    })
    .when("/villains", {
        template: "<villains></villains>"
    })
    .otherwise({
        redirectTo: "/home"
    })
}]);