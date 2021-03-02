let buttons =Array.from(document.querySelectorAll("button"))

// vrifier frist les valeurs horizontal
let firstDiv=Array.from(document.querySelectorAll("#game div:first-child button"))
let secDiv=Array.from(document.querySelectorAll("#game div:nth-child(2) button"))
let thirDiv=Array.from(document.querySelectorAll("#game div:nth-child(3)  button"))
let array1=[firstDiv[0],secDiv[0],thirDiv[0]]
let array2=[firstDiv[1],secDiv[1],thirDiv[1]]
let array3=[firstDiv[2],secDiv[2],thirDiv[2]]
let array4=[firstDiv[2],secDiv[1],thirDiv[0]]
let array5=[firstDiv[0],secDiv[1],thirDiv[2]]






function winner(e){
    if(firstDiv[0].innerHTMl!==undefined || secDiv[0].innerHTML!== undefined || thirDiv[0]!==undefined){
if(firstDiv[0].innerHTML===secDiv[0].innerHTML&& secDiv[0].innerHTML===thirDiv[0].innerHTML){
    array1.forEach(elment=>{
        elment.style.backgroundColor="green"
    })
}
    }
    if(firstDiv[1].innerHTMl!==undefined || secDiv[1].innerHTML!== undefined || thirDiv[1]!==undefined)
    if(firstDiv[1].innerHTML===secDiv[1].innerHTML&& secDiv[1].innerHTML===thirDiv[1].innerHTML){
        array2.forEach(elment=>{
            elment.style.backgroundColor="green"
        })
    }
    if(firstDiv[2].innerHTMl!==undefined || secDiv[2].innerHTML!== undefined || thirDiv[2]!==undefined)
    if(firstDiv[2].innerHTML===secDiv[2].innerHTML&& secDiv[2].innerHTML===thirDiv[2].innerHTML){
        array3.forEach(elment=>{
            elment.style.backgroundColor="green"
        })
    }
    if(firstDiv[2].innerHTMl!==undefined || secDiv[1].innerHTML!== undefined || thirDiv[0]!==undefined)
    if(firstDiv[2].innerHTML=== secDiv[1].innerHTML&& secDiv[1].innerHTML===thirDiv[0].innerHTML){
        array4.forEach(elment=>{
            elment.style.backgroundColor="green"
        })
    }
    if(firstDiv[0].innerHTMl!==undefined || secDiv[1].innerHTML!== undefined || thirDiv[2]!==undefined)
    if(firstDiv[0].innerHTML=== secDiv[1].innerHTML&& secDiv[1].innerHTML===thirDiv[2].innerHTML){
        array5.forEach(elment=>{
            elment.style.backgroundColor="green"
        })
}

}


// donn le text X O
let count=0
function changerLeText(e){

    if(count%2==0){
        e.target.innerHTML="X"
    }else{
        e.target.innerHTML="O"
    }
    count++
    winner()
}

buttons.forEach(button=>{
    button.addEventListener('click', changerLeText)
})


