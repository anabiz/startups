const fs = require('fs');

//read database data, convert it to json, and assign it to Db   
const Db = JSON.parse(fs.readFileSync("dataBase.json"));


const updateStartup = (startup) => {
    const id = Db.length + 1;
    const startupData = { ...startup, id };
    Db.push(startupData)

    const stingStartupData = JSON.stringify(Db, null, 2);
    fs.writeFileSync("dataBase.json", stingStartupData);

    return startupData;
}

module.exports = updateStartup;