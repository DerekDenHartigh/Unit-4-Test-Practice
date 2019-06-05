"use strict";

angular.module("EarthwormJimApp")
.config(["$routeProvider", ($routeProvider) => { // config dependency is routeProvider, uses it for routing
    $routeProvider // imported server
    .when("/home", { // when url is here,
        template: "<home></home>" // use this template
    })
    .when("/hero", {
        template: "<hero></hero>"
    })
    .when("/villains", {
        template: "<villains></villains>"
    })
    .otherwise({ // if url is anything other than these options, default to /home
        redirectTo: "/home"
    })
}]);