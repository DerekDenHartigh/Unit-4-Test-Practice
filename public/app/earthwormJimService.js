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
            console.log(response);
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
            console.log(response);
            return response.data;
        });
    };

    // PUT - name and image - not sure if it is ok to have two http reqs stacked like that
    // service.updateVillain = (villainUpdate)=>{
    //     if(villainUpdate.nameUpdate === true && villainUpdate.imageUpdate === true){
    //         $http({ //image
    //             url: "/villainsImage",
    //             data: villainUpdate,
    //             method: "PUT"
    //         })
    //         .then((response)=>{
    //             console.log(`villain image updated`);
    //         })
    //         .catch((error)=>{
    //             console.error(error);
    //         });
    //         $http({ //name
    //             url: "/villainsImage",
    //             data: villainUpdate,
    //             method: "PUT"
    //         })
    //         .then((response)=>{
    //             console.log(`villain name updated from ${villainUpdate.character_name} to ${villainUpdate.newName}`);
    //         })
    //         .catch((error)=>{
    //             console.error(error);
    //         });  // need a return here
    //     } else if (villainUpdate.nameUpdate === true && villainUpdate.imageUpdate === false) {
    //         return $http({
    //             url: "/villainsImage",
    //             data: villainUpdate,
    //             method: "PUT"
    //         })
    //         .then((response)=>{
    //             console.log(`villain name updated from ${villainUpdate.character_name} to ${villainUpdate.newName}`);
    //         })
    //         .catch((error)=>{
    //             console.error(error);
    //         });
    //     } else if (villainUpdate.imageUpdate === true && villainUpdate.nameUpdate === false) {
    //         return $http({
    //             url: "/villainsImage",
    //             data: villainUpdate,
    //             method: "PUT"
    //         })
    //         .then((response)=>{
    //             console.log(`villain image updated`);
    //         })
    //         .catch((error)=>{
    //             console.error(error);
    //         }); 
    //     } else {
    //         console.error("An impossibility has occurred");
    //         return;
    //     };
    // };

    service.updateVillainName = (villainUpdate)=>{
        console.warn(villainUpdate.character_name, villainUpdate.newName)
        return $http({ //image
            url: "/villainsName",
            data: villainUpdate,
            method: "PUT"
        })
        .then((response)=>{
            console.log(`villain name updated from ${villainUpdate.character_name} to ${villainUpdate.newName}`);
            console.log(response);
        })
        .catch((error)=>{
            console.error(error);
        });
    };

    service.updateVillainImage = (villainUpdate)=>{
        console.warn(villainUpdate.character_name, villainUpdate.character_image);
        return $http({ //image
            url: "/villainsImage",
            data: villainUpdate,
            method: "PUT"
        })
        .then((response)=>{
            console.log(`villain image updated`);
            console.log(response);
        })
        .catch((error)=>{
            console.error(error);
        });
    };


    //Delete
    service.deleteVillain = (villain)=>{
        console.log(`say goodbye to ${villain}`);
        return $http({
            url: "/villains",
            data: villain,
            method: "DELETE"
        })
        .then((response)=>{
            console.log(response);
            return response.data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };

})