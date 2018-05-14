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

        console.log("success"); 

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
            console.log("Bood added: " + newBook.title) 
            location.reload(); 
        })

    })

})