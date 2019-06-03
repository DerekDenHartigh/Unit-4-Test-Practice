"use strict";

function HomeController(earthwormJimService) {
    /**
     * I don't do anything here
     */
    }

angular
.module('EarthwormJimApp')  
.component('home', {
    templateUrl: './public/app/components/home/homeTemplate.html',
    controller: HomeController
});