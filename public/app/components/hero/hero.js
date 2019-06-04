"use strict";

function HeroController(earthwormJimService) {

    }

angular
.module('EarthwormJimApp')  
.component('hero', {
    templateUrl: '/app/components/hero/heroTemplate.html',
    controller: HeroController
});