/*
 * @Author: Huhui
 * @Date: 2022-10-17 16:32:37
 * @LastEditors: Huhui
 * @LastEditTime: 2024-03-14 21:24:53
 * @Description: 
 * Copyright (c) 2024 by Huhui, All Rights Reserved. 
 */
const mysql = require('mysql2');

const config = require('./config');

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD
});

connections.getConnection((err, conn) => {
  console.log(err);
  conn.connect((err) => {
    if (err) {
      console.log("连接失败:", err);
    } else {
      console.log("数据库连接成功~");
    }
  })
});

module.exports = connections.promise();

