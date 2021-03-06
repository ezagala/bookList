module.exports = (sequelize, dataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: dataTypes.STRING
        }, 
        author: {
            type: dataTypes.STRING
        },
        devoured: {
            type: dataTypes.BOOLEAN
        }
    })
    return Book; 
}
