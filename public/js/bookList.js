$(function() {

    // Click event handles change in status
    $(".devour").on("click", function(event){
        const id = $(this).data("id"); 
        var readState = $(this).data("readstate"); 

        if (readState) {
            readState = false;
            console.log("success")
        } else {readState = true};  

        const revReadState = {
            devoured: readState
        }

        $.ajax("/api/books/" + id, {
            type: "PUT", 
            data: revReadState
        }).then( () => {
            console.log("Devoured updated to: " + readState) 
            location.reload(); 
        })

    })

    $(".addBook").on("click", function(event) {
        event.preventDefault(); 

        const title = $("#addTitle").val().trim(); 
        const author = $("#addAuthor").val().trim();
        let devoured = false; 

        if ($("#readRadio").is(":checked")) {
            devoured = true; 
        } else {devoured = false;}; 

        const newBook = {
            title: title, 
            author: author, 
            devoured: devoured
        }

        console.log("The new book is: " + newBook); 

        $.ajax("/api/books/", {
            type: "POST", 
            data: newBook
        }).then( () => {
            console.log("Book added: " + newBook.title) 
            location.reload(); 
        })

    })

    $(".delete").on("click", function(event){
        event.preventDefault(); 
        const id = $(this).data("id");

        $.ajax("/api/books/" + id, {
            type: "DELETE"
        }).then( () => {
            console.log("Book id that was deleted: " + id) 
            location.reload(); 
        })

    })

})