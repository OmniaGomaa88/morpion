let boxs =Array.from(document.querySelectorAll("button"))  // array of all the buttons
let textdiv = document.querySelector("#game_status") // the text down of all the buttons



const winningCombinations = [
    // array of all the cases of wins
    [boxs[0], boxs[1], boxs[2]],
    [boxs[3], boxs[4], boxs[5]],
    [boxs[6], boxs[7], boxs[8]],
    [boxs[0], boxs[3], boxs[6]],
    [boxs[1], boxs[4], boxs[7]],
    [boxs[2], boxs[5], boxs[8]],
    [boxs[0], boxs[4], boxs[8]],
    [boxs[2], boxs[4], boxs[6]]
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
            boxs.forEach(box=>{
                box.removeEventListener('click',changerLeText)
            })
            // creat button for replay again
textdiv.appendChild(document.createElement('button')).textContent="Play Again"
let playAgain=document.querySelector("#game_status button")
playAgain.style.fontSize=20+"px"
            playAgain.style.display="block"
let count=0// counter for checking if play Again button is clicked
playAgain.addEventListener('click',function(){
 count++
if(count>0){// checking if play Again button is clicked
    playAgain.style.display="none"// the play again button disaper after cliked
    textdiv.textContent="lets play Again"
    // the boxs retun white and whithout text
    boxs.forEach(box=>{
        box.innerHTML=""
        winningCombinations[i][0].style.backgroundColor="white"
        winningCombinations[i][1].style.backgroundColor="white"
        winningCombinations[i][2].style.backgroundColor="white"
        box.addEventListener('click',changerLeText)
    })
 
 }
 })
//  end of for playAgain
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

boxs.forEach(box=>{
    box.addEventListener('click', changerLeText)
})


