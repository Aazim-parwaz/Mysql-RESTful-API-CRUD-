const mysql=require('mysql2');

const config=require('../config');

const pool=mysql.createPool(config.mysql);

console.log('dbjs');

module.exports=pool.promise();