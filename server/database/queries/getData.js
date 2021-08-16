// Add code below to get users info from your database
const connection = require("../config/connection");

const getData = () => {
  return connection
    .query("SELECT * FROM USERS;")
};
module.exports  =getData;