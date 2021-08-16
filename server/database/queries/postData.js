// Add code below to insert user info to your database
const connection = require("../config/connection");
const postData = (NAME,LOCATION) => {
  return connection
    .query(`INSERT INTO USERS (NAMR,LOCATION) VALUES ('${NAME}','${LOCATION}')`)
// [name,location]
};
module.exports  =postData;