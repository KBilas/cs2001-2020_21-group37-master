const mysql = require('mysql');



module.exports = class SQLManager {
  constructor() {
    this.con = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'cs2001_app'
    });
  }
  /*
    returnResult() {
      return new Promise((resolve, reject) => {
        this.con.query("querystring", function (err, results) {
          if (err) reject(err);
          resolve(results);
        });
      });
    }
  */
  async createExercises(name, type) {
    let sql = `INSERT INTO postexercise (exercise_name, exercise_type) VALUES ('${name}', '${type}');`
    return new Promise((resolve, reject) => {
      this.con.query(sql, function (err, result) {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
}