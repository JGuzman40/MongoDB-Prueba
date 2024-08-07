require('dotenv').config();
const mongoose = require("mongoose");

const { CONECT } = process.env;

const dbCon = async () => {
    // realiza la conexion a la base de datos en MongoAtlas
    await mongoose.connect(`${CONECT}`);
};

module.exports = dbCon;
