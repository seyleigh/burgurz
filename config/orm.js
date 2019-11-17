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
        const query = `INSERT INTO BURGERS SET ?`;
        return new Promise((resolve, reject) => {
            connection.query(query, obj, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }

                // console.log(obj);
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

                console.log(tableName)

                // console.log(tableName, updCol, updVal, idCol, objId)
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