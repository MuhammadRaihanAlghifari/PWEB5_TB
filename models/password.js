const db = require('../config/db');

exports.getUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, result) => {
    if (err) throw err;
    callback(result);
  });
};

exports.updatePassword = (email, newPassword, callback) => {
  const sql = 'UPDATE users SET password = ? WHERE email = ?';
  db.query(sql, [newPassword, email], (err, result) => {
    if (err) throw err;
    callback(result);
  });
};