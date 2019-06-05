"use strict";

function HeroController(earthwormJimService, $location) {
    const ctrl = this;
    ctrl.service = earthwormJimService;
    ctrl.jim; // set by getCharacters

    ctrl.getCharacters = ()=>{
        let url = $location.url(); // grabs current location
        ctrl.service.getCharacters(url)
        .then((data)=>{
            ctrl.jim = data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };
    ctrl.getCharacters();

    }

angular
.module('EarthwormJimApp')  
.component('hero', {
    templateUrl: '/app/components/hero/heroTemplate.html',
    controller: HeroController
});