const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Book = sequelize.define('book', {
    title: {
        type: sequelize.STRING
    }, 
    author: {
        type: sequelize.STRING
    },
    devoured: {
        type: sequelize.BOOLEAN
    }
})

Book.sync(); 

module.exports = Book; 