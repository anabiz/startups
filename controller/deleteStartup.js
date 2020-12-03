const fs = require('fs');

//read database data, convert it to json, and assign it to Db   
const Db = JSON.parse(fs.readFileSync("dataBase.json"));


const deleteStartup = (req, res) => {
    const id = req.params.id - 1;
    const newDb = Db.splice(id, 1);
    const stingStartupData = JSON.stringify(Db, null, 2);
    fs.writeFileSync("dataBase.json", stingStartupData);

     return res.status(200).send(newDb[0]);
}

module.exports = deleteStartup;