"use strict";

function VillainController(earthwormJimService, $location) {
    const ctrl = this;
    ctrl.service = earthwormJimService;
    ctrl.villainList; // set by getCharacters
    ctrl.name;
    ctrl.image;

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


    ctrl.renameVillain = (oldName, newName)=>{
        let url = $location.url();
        console.log(oldName, newName);
        let newVillain = {
            character_name: oldName,
            newName: newName
        };
        ctrl.service.updateVillainName(newVillain)
        .then(()=>{
            ctrl.service.getCharacters(url)
            .then((data)=>{
                console.log(data);
                ctrl.villainList = data;
            })
            .catch((err)=>{
            console.error(err);
            })
        });
    };

    ctrl.changeVillainImage = (villainName, newImage)=>{
        let url = $location.url();
        console.log(villainName, newImage);
        let newVillain = {
            character_name: villainName,
            character_image: newImage
        };
        ctrl.service.updateVillainImage(newVillain)
        .then(()=>{
            ctrl.service.getCharacters(url)
            .then((data)=>{
                console.log(data);
                ctrl.villainList = data;
            })
            .catch((err)=>{
            console.error(err);
            })
        });
    };

    ctrl.destroyVillain = (villainName)=>{
        let url = $location.url();
        console.log(villainName);
        ctrl.service.deleteVillain(villainName)
        .then(()=>{
            ctrl.service.getCharacters(url)
            .then((data)=>{
                console.log(data);
                ctrl.villainList = data;
            })
            .catch((err)=>{
            console.error(err);
            })
        });
    };
  
    ctrl.createVillain = (name, image)=>{
        let url = $location.url();
        console.log(name, image);
        let newVillain = {
            character_name: name,
            character_image: image,
            character_alignment: "Evil"
        };
        console.log(newVillain);
        ctrl.service.createVillain(newVillain)
        .then(()=>{
            ctrl.service.getCharacters(url)
            .then((data)=>{
                console.log(data);
                ctrl.villainList = data;
            })
            .catch((err)=>{
            console.error(err);
            })
        });
    };

    }

angular
.module('EarthwormJimApp')  
.component('villains', {
    templateUrl: '/app/components/villains/villainTemplate.html',
    controller: VillainController
});