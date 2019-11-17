const orm = require("../config/orm");

function Burger(name) {
    this.name = name;
    this.devoured = false;
}

Burger.selectBurgers = function () {
    return new Promise((resolve, reject) => {
        orm.selectAll("burgers").then(results => {
            resolve(results);
        }).catch(() => {
            reject("Could not retrieve burgers");
        });
    });
};

Burger.create = function (burger) {
    return new Promise((resolve, reject) => {
        orm.createOne("burgers", {
            burger_name: burger.name,
            devoured: burger.devoured
        }).then(results => {
            // Get db generated ID
            burger.id = results.insertId;
            resolve(burger.id);
        }).catch(() => {
            reject("Could not add burger");
        });
    });
};

Burger.updateDevoured = function (burgerId) {
    return new Promise((resolve, reject) => {
        orm.updateOne("burgers", "DEVOURED", true, "ID", burgerId).then(results => {
            resolve(results);
        }).catch(() => {
            reject("Could not update burger");
        });
    })
};

Burger.delete = function(burgerId) {
    return new Promise((resolve, reject) => {
        orm.deleteOne("burgers", "ID", burgerId).then(results => {
            resolve(results)
        }).catch(() => {
            reject("Could not delete burger");
        })
    })
}


module.exports = Burger;