document.onkeydown = dow;
document.onkeyup = up;
function dow(onkeydown ) {
    
    let clas= document.getElementById('person');

clas.classList.remove('mario');

clas.classList.add('marioup');
}

function up(onkeyup ) {
    // document.getElementById("cone").style.backgroundColor = "blue";
    let clas= document.getElementById('person');

    clas.classList.remove('marioup');
    
    clas.classList.add('mario');
}

const loop = setInterval(()=>{
    let pipe=document.getElementById("cone")
    let player=document.getElementById("person")
    const positionPipe=pipe.offsetLeft
    const positionPerson=+window.getComputedStyle(player).marginBottom.replace('px','')
    
    if(positionPipe<=20&&positionPipe>0&&positionPerson<90){
        pipe.style.animation='none'
        pipe.style.left=`${positionPipe}px`
        
        player.style.animation='none'
        player.style.bottom="80px"
    }
},10)


