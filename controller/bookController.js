// Dependency
const db = require("../models"); 

// Routes
module.exports = (app) => {

    // Get route display all of the data persisting in the DB. 
    app.get("/", (req, res) => {
        db.Book.findAll({}).then( dbBook => {
            const handleBarObj = {
                books: dbBook
            }
            console.log("Handlebars Obj: " + JSON.stringify(handleBarObj)); 
            res.render("index", handleBarObj); 
        }); 
    }); 

    // Get route for the api
    app.get("/api/books", (req, res) => {
        db.Book.findAll({}).then(result => res.json(result))
    })

    // Route to add a title 
    app.post("/api/books", (req, res) => {
        const book = req.body
        console.log("This is book " + book); 
        db.Book.create({
            title: book.title, 
            author: book.author, 
            devoured: book.devoured
        }).then(result => res.json(result));
    })

    // Route to hit when title has been devoured
    app.put("/api/books", (req, res) => {
        const book = req.body; 
        db.Book.update(
            {devoured: book.devoured}, 
            {where: {id: book.id}}
        ).then(result => res.json(result));; 
    })
};