"use strict";

const express = require("express");
const router = express.Router();  // Router has to be capital
const secret = require("./secret.js");
const pg = require('pg');
const pool = new pg.Pool({
    user: "postgres",
    password: secret.password,
    host: "localhost",
    port: 5432,
    database: "Unit4Test",
    ssl: false
});

pool.on('error', (err) => {
    console.error('An idle client has experienced an error', err.stack)
  })

// GET

router.get("/hero", (req, res) => {
    //pool.query("SELECT * FROM earthworm_jim_characters WHERE character_alignment = 'Good';")
    pool.query('SELECT * FROM earthworm_jim_characters WHERE character_alignment = \'Good\';')
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((error)=>{
            console.error(error);
        });
    });

router.get("/villains", (req, res) => {
   pool.query("SELECT * FROM earthworm_jim_characters WHERE character_alignment = 'Evil';")
   //pool.query('SELECT * FROM earthworm_jim_characters WHERE character_alignment = \'Evil\';')
   .then((result)=>{
            res.send(result.rows);
        })
        .catch((error)=>{
            console.error(error);
        });
    });

// POST
router.post("/villains", (req, res) => {
    let newVillain = req.body;
    let sql = "INSERT INTO earthworm_jim_characters(character_name, character_alignment, character_image) " + "VALUES ($1::text, $2::text, $3::text)";
    let values = [newVillain.character_name, newVillain.character_alignment, newVillain.character_image];
    console.error(newVillain);
        pool.query(sql, values).then((result) => {
            res.status(201); // 201 Created
            res.send(`${newVillain.character_name} added successfully!`);
            });
    });

// PUT
    // name
    router.put("/villainsName", (req, res) => {
        let oldName = req.body.character_name;
        let newName = req.body.newName;
        console.error(oldName, newName);
        let sql = `UPDATE earthworm_jim_characters SET character_name = '${newName}' WHERE character_name = '${oldName}';`;
        pool.query(sql)
        .then((result)=>{
            console.log(`Changed ${oldName}'s name to ${newName}`);
            res.status(204);
            res.send("Name Change Successful!");
        })
        .catch((error)=>{
            console.error(error);
        });
        });

    // image
    router.put("/villainsImage", (req, res) => {
        let name = req.body.character_name;
        let newImage = req.body.character_image;
        console.error(name, newImage);
        let sql = `UPDATE earthworm_jim_characters SET character_image = '${newImage}' WHERE character_name = '${name}';`;
        pool.query(sql)
        .then((result)=>{
            console.log("Villain Image Changed")
            res.status(204);
            res.send("Image Change Successful")
        })
        .catch((error)=>{
            console.error(error);
        });
    });

// DELETE
    // Looks like you can't pass req.body on a delete request...
    // router.delete("/villains", (req, res) => {
    //     console.log(req); // returning an empty obj {} ?
    //     console.log(req.body);
    //     // let name = req.body.targetName;
    //     let name = req.body; // should be the villain name, not {}
    //     console.log(name);
    //     let sql = `DELETE FROM earthworm_jim_characters WHERE character_name = '${name}';`;  // I've tested this in SQL it works
    //     console.log(name, sql);
    //     pool.query(sql)
    //     .then((result) => {
    //         res.status(204);
    //         res.send(`Deleted ${name} from the Villains list, did they die or have a change of heart?`);
    //     })
    //     .catch((err)=>{
    //         console.error(err);
    //     });
    // });

    router.delete("/villains/:id", (req, res) => {
        let name = req.params.id;
        let sql = `DELETE FROM earthworm_jim_characters WHERE character_name = '${name}';`;
        pool.query(sql)
        .then((result) => {
            res.status(204); // No Content
            res.send(`Deleted item id# ${req.params.id}, refresh cart`);
        });
    });
    
    
module.exports = router;