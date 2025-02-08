const NotesContainer = document.querySelector(".note-container");
const addBtn = document.querySelector(".Add-btn");
let NotesBoxes = document.querySelectorAll(".notes-input");



// For local storage

function GetData(){
    
    NotesContainer.innerHTML = localStorage.getItem("NotesBoxes");

}

GetData();

function StoreData(){

    localStorage.setItem("NotesBoxes", NotesContainer.innerHTML);

}


// Adding eventlistner on add button

const validPages = ["notes-taking-app"]; // Add all valid paths here

// Get the current URL path
const currentPath = window.location.pathname;

// Check if the current path is valid
if (!validPages.includes(currentPath)) {
    // Redirect to the 404 page
    window.location.href = "/404.html";
}
addBtn.addEventListener("click",()=>{

    let inputBox = document.createElement("p");
    inputBox.setAttribute("contenteditable", "true");
    inputBox.classList.add("notes-input");
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "delete-icon.png";
    NotesContainer.appendChild(inputBox).appendChild(deleteIcon);
    StoreData();
})

// Deleting the note

NotesContainer.addEventListener("click",function(e){

    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        StoreData();
    }
    // It will keep updating the text in p
    else if(e.target.tagName === "P"){
        NotesBoxes = document.querySelectorAll(".notes-input");
        NotesBoxes.forEach(e=>{
            e.onkeyup = function(){
                StoreData();
            }
        });
    }

})

