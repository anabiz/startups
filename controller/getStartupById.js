const fs = require('fs');

//read database data, convert it to json, and assign it to Db   
const Db = JSON.parse(fs.readFileSync("dataBase.json"));

const getStartupById = (req, res) => {
    const id = req.params.id;

    const startup = Db.find(element => element.id == id);

    return res.status(200).json({g:"io"});
}

module.exports = getStartupById;