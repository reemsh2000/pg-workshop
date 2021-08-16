// Add code below to connect to your database
const {Pool}=require('pg'); 
require('env2')('config.env')
const pool = new Pool();
const {DB_URL}=process.env
const options ={
    connectionString:DB_URL,
    ssl:false
}
module.exports=new Pool(options);