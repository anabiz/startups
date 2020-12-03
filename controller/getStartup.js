const fs = require('fs');

//read database data, convert it to json, and assign it to Db   
const Db = JSON.parse(fs.readFileSync("dataBase.json"));

const getStartup = (req, res) => {
    return res.status(200).json(Db);
}

module.exports = getStartup;