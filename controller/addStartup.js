const fs = require('fs');
var express = require('express');

//read database data, convert it to json, and assign it to Db   
const Db = JSON.parse(fs.readFileSync("dataBase.json"));

const addStartup = (req, res) => {
    const startup = req.body;
    const id = Db.length + 1;
    const startupData = { ...startup, id };
    Db.push(startupData)

    const stingStartupData = JSON.stringify(Db, null, 2);
    fs.writeFileSync("dataBase.json", stingStartupData);

    return  res.status(201).send(startupData);;
}

module.exports = addStartup;