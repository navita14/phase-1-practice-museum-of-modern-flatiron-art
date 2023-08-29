const exTitle = document.querySelector("#exhibit-title")
const exDescr = document.querySelector("#exhibit-description")
const exImg = document.querySelector("#exhibit-image")
const ticketBought = document.querySelector("#tickets-bought")
const infoDiv = document.querySelector("#importantDiv")
const h1 = document.createElement("h1")
const commentSectionDiv = document.querySelector("#comments-section")
const commentP = document.createElement('p');

fetch("http://localhost:3000/current-exhibits")
.then(res => res.json())
.then(data => {

addExhibit(data[0])

})


function addExhibit(data){
    exTitle.textContent = data.title;
    exDescr.textContent = data.description;
    exImg.src = data.image;
    ticketBought.textContent = data.tickets_bought;
    
    commentP.textContent = data.comments;
    commentSectionDiv.append(commentP)
    
    h1.textContent = `By: ${data.artist_name}`
    infoDiv.prepend(h1)
}


const addComment = document.querySelector('#comment-input')
const form = document.querySelector('#comment-form')

form.addEventListener("submit", e => {
    e.preventDefault()
    const newInput = `${addComment.value},`
    commentP.append(newInput)
})


const button = document.querySelector('#buy-tickets-button')
const countArea = document.querySelector('#tickets-bought')


let count = 0

button.addEventListener("click", e => {
    count ++;
    countArea.innerHTML = parseInt(count)
})