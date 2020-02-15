const connection = require("./connection");

const orm = {
    selectAll: function (tableName) {
        const query = "SELECT * FROM ??";
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },
    createOne: function (tableName, obj) {
        const query = `INSERT INTO burgers SET ?`;
        return new Promise((resolve, reject) => {
            connection.query(query, obj, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },
    updateOne: function (tableName, updCol, updVal, idCol, objId) {
        const query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName, updCol, updVal, idCol, objId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },
    deleteOne: function (tableName, idCol, objId) {
        const query = "DELETE FROM ?? WHERE ?? = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [tableName, idCol, objId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        })
    } 

};

module.exports = orm;