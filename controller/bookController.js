// Dependency
const db = require("../models"); 

// Routes
module.exports = (app) => {

    // Get route display all of the data persisting in the DB. 
    app.get("/", (req, res) =>{
        db.book.findAll({}).then( dbBook => {
            const handleBarObj = {
                books: dbBook
            }
            console.log(handleBarObj); 
            res.render("index", handleBarObj); 
            
        }); 
    }); 

    // Route to add a title 
    app.post("/api/books", (req, res) => {
        // db.Book.create(); 
    })

    // Route to hit when title has been devoured
    app.put("/api/books", (req, res) => {
        // db.Book.update(); 
    })

};