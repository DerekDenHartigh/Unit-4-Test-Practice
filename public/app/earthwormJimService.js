"use strict";

angular
.module("EarthwormJimApp")
.service("earthwormJimService", function($http){
    const service = this;

    // GET
    service.getCharacters = (currentUrl)=>{
        let pageUrl = currentUrl; // doing this so that I can re-use same code for hero/villains
        return $http({
            url: `/${pageUrl}`,
            method: "GET"
        })
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };

    // POST
    service.addVillain = (newVillain)=>{
        return $http({
            url: "/villains",
            method: "POST",
            data: newVillain
            })
        .then((response)=>{
            return response.data;
        });
    };

    // PUT - name and image - not sure if it is ok to have two http reqs stacked like that
    service.updateVillain = (villainUpdate)=>{
        if(villainUpdate.nameUpdate === true && villainUpdate.imageUpdate === true){
            $http({ //image
                url: "/villainsImage",
                data: villainUpdate,
                method: "PUT"
            })
            .then((response)=>{
                console.log(`villain image updated`);
            })
            .catch((error)=>{
                console.error(error);
            });
            $http({ //name
                url: "/villainsImage",
                data: villainUpdate,
                method: "PUT"
            })
            .then((response)=>{
                console.log(`villain name updated from ${villainUpdate.character_name} to ${villainUpdate.newName}`);
            })
            .catch((error)=>{
                console.error(error);
            });  // need a return here
        } else if (villainUpdate.nameUpdate === true && villainUpdate.imageUpdate === false) {
            return $http({
                url: "/villainsImage",
                data: villainUpdate,
                method: "PUT"
            })
            .then((response)=>{
                console.log(`villain name updated from ${villainUpdate.character_name} to ${villainUpdate.newName}`);
            })
            .catch((error)=>{
                console.error(error);
            });
        } else if (villainUpdate.imageUpdate === true && villainUpdate.nameUpdate === false) {
            return $http({
                url: "/villainsImage",
                data: villainUpdate,
                method: "PUT"
            })
            .then((response)=>{
                console.log(`villain image updated`);
            })
            .catch((error)=>{
                console.error(error);
            }); 
        } else {
            console.error("An impossibility has occurred");
            return;
        };
    };



    //Delete
    service.deleteVillain = (villain)=>{
        console.log(`say goodbye to ${villain.character_name}`);
        return $http({
            url: "/villains",
            method: "DELETE"
        })
        .then((response)=>{
            return response.data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };

})