
document.addEventListener("DOMContentLoaded", () => {
    
const thumbnailsDOM = document.querySelectorAll(".thumbnail"); // qSAll = NodeList (tableau)
const largeImgDOM = document.querySelector("#largeImage");
const captionDOM = document.getElementById("caption");
const championTextDOM = document.getElementById("championText")
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const championTexts = [
        "Tech Show Paris 2024",
        "Un salon plein de nouvelles technologies",
        "Moto Ducati Panigale du Champion du Monde Pecco Bagnaia ",
        "Robot à déplacement automatique",
        "Les entreprises présentent sur le salon",
    ];

// Image par défaut
largeImgDOM.src = thumbnailsDOM[0].src;
// console.log(thumbnailsDOM);

let currentIndex = 0;

function updateImage(index){
    largeImgDOM.src = thumbnailsDOM[index].src;
    captionDOM.style.display = "block" // Affiche la légende 
    captionDOM.textContent = thumbnailsDOM[index].getAttribute("data-caption")
    championTextDOM.textContent = championTexts[index] // Affiche le texte du champion
}


// Ajouter les écouteurs d'événements aux miniatures
for(let i =0; i < thumbnailsDOM.length; i++){
    
    thumbnailsDOM[i].addEventListener("click", () => {
        // thumbnailsDOM[i].style.border = "2px solid white";
        currentIndex = i;
        updateImage(currentIndex)
    })
}


// Navigation précédente
prev.addEventListener("click", () => {
    // ternaire
    currentIndex = (currentIndex === 0) ? thumbnailsDOM.length - 1 : currentIndex - 1
    
    // Classique avec if
    // if(currentIndex === 0){
    //  currentIndex = thumbnailsDOM.length - 1   
    // }else {
    //     currentIndex--
    // }
    updateImage(currentIndex)
    
})
next.addEventListener("click",() => {
    
        // ternaire
    currentIndex = (currentIndex === thumbnailsDOM.length - 1) ? 0 : currentIndex + 1
    
    // Classique avec if
    // if(currentIndex === thumbnailsDOM.length - 1){
    //  currentIndex++  
    // }else {
    //     currentIndex--
    // }
    updateImage(currentIndex)
    
    
})

})
