"use strict";

angular
.module("EarthwormJimApp")
.service("earthwormJimService", function($http){
    const service = this;

    // GET
    service.getCharacters = (currentUrl)=>{
        return $http({
            url: `${currentUrl}`, // hero or villains
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
    service.createVillain = (newVillain)=>{
        console.warn(newVillain);
        return $http({
            url: "/villains",
            method: "POST",
            data: newVillain
            })
        .then((response)=>{
            return response.data;
        });
    };

    // PUT
    service.updateVillainName = (villainUpdate)=>{
        console.warn(villainUpdate.character_name, villainUpdate.newName)
        return $http({ //image
            url: "/villainsName",
            data: villainUpdate,
            method: "PUT"
        })
        .then((response)=>{
            console.log(`villain name updated from ${villainUpdate.character_name} to ${villainUpdate.newName}`);
            return response;
        })
        .catch((error)=>{
            console.error(error);
        });
    };

    service.updateVillainImage = (villainUpdate)=>{
        return $http({
            url: "/villainsImage",
            data: villainUpdate,
            method: "PUT"
        })
        .then((response)=>{
            console.log(`villain image updated`);
            return(response);
        })
        .catch((error)=>{
            console.error(error);
        });
    };


    // DELETE
    service.deleteVillain = (villain)=>{
        console.log(`say goodbye to ${villain}`);

        return $http({
            url: "/villains/"+villain,
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