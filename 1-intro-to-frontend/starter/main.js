const noteForm = document.getElementById("note-form");
const titleInput = document.getElementById("title-input");
const bodyInput = document.getElementById("body-input");

// make me add more notes on submit
noteForm.onsubmit = function(event) {
    event.preventDefault();
    
    var titleNode = document.createElement("h3");
    titleNode.innerText = titleInput.value; 

    var bodyNode = document.createElement("p");
    bodyNode.innerText = bodyInput.value; 

    var articleNode = document.createElement("article"); 
    articleNode.appendChild(titleNode); 
    articleNode.appendChild(bodyNode); 

    var notesDiv = document.getElementById("notes");
    notesDiv.appendChild(articleNode); 
}