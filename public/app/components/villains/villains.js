"use strict";

function VillainController(earthwormJimService, $location) {
    const ctrl = this;
    ctrl.service = earthwormJimService;
    ctrl.villainList; // set by getCharacters

    ctrl.getCharacters = ()=>{
        let url = $location.url();
        console.log(url); //  "/villains"
        ctrl.service.getCharacters(url)
        .then((data)=>{
            console.log(data);
            ctrl.villainList = data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };
    ctrl.getCharacters();

    }

angular
.module('EarthwormJimApp')  
.component('villains', {
    templateUrl: '/app/components/villains/villainTemplate.html',
    controller: VillainController
});