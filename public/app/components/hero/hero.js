"use strict";

function HeroController(earthwormJimService) {

    }

angular
.module('EarthwormJimApp')  
.component('hero', {
    templateUrl: './public/app/components/hero/heroTemplate.html',
    controller: HeroController
});