let box =Array.from(document.querySelectorAll("button"))  // array of all the buttons
let textdiv = document.querySelector("#game_status") // the text down of all the buttons


const winningCombinations = [
    // array of all the cases of wins
    [box[0], box[1], box[2]],
    [box[3], box[4], box[5]],
    [box[6], box[7], box[8]],
    [box[0], box[3], box[6]],
    [box[1], box[4], box[7]],
    [box[2], box[5], box[8]],
    [box[0], box[4], box[8]],
    [box[2], box[4], box[6]]
]
// function for cheking how is the winner
function winner(){
     // chicking of the cases
    for(let i=0;i<winningCombinations.length;i++){
        if(winningCombinations[i][0].innerHTML===winningCombinations[i][1].innerHTML&&
             winningCombinations[i][1].innerHTML===winningCombinations[i][2].innerHTML
            &&(winningCombinations[i][0].innerHTML!==""))
        {
            // change the colors  of all the boxs of the  winner
            winningCombinations[i][0].style.backgroundColor="lightGreen"
            winningCombinations[i][1].style.backgroundColor="lightGreen"
            winningCombinations[i][2].style.backgroundColor="lightGreen"
             // show the winner name
            textdiv.textContent="the winner is"+" "+winningCombinations[i][0].innerHTML
            // remove click from each button in the end of the game
            box.forEach(winner=>{
                winner.removeEventListener('click',changerLeText)
            })
        }
        
}
}

//show the X or O by clikcing
let turne=true
function changerLeText(e){
    if(turne){
        e.target.innerHTML="X"
        textdiv.textContent= "is O turn"
        e.target.removeEventListener('click',changerLeText )// remove click from each button if it not the playes trune
        turne=false
    }else{
        e.target.innerHTML="O"
        textdiv.textContent= "is X turn"
        e.target.removeEventListener('click',changerLeText );// remove click from each button if it not the playes trune
        turne=true
    }
    
    winner()// calling the function winner 
    
}

box.forEach(button=>{
    button.addEventListener('click', changerLeText)
})


