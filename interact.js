let button=document.querySelector(".control-button span");
let control=document.querySelector(".control-button")
console.log(button);
let a=[1,2,3,4,5,6,7,8];
let b=a.filter(function(ele){
    return ele>5;
});
button.classList.r
console.log(b);
let span_name=document.querySelector(".info-container .name span");
button.onclick=function(){
    let name=prompt("what is your name");
    if (name === null || name==""){
        name="unknown"
    }
    span_name.innerHTML=name;
    control.remove();
}
let blocks=document.querySelectorAll(".game-block");
let array_index=[...Array(blocks.length).keys()];
// let blocks=document.querySelectorAll(".game-block");
array_index=randoms(array_index.length);
blocks.forEach(function(block,index){
        block.style.order=array_index[index];
        block.addEventListener("click",function(){
            block.classList.add("isflipped");
            // flipblock()
            let flipblocks=Array.from(blocks).filter(function(ele){
                if (ele.classList.contains("isflipped")===true){
                    return ele;
                }
            })
            if (flipblocks.length==2){
                // document.querySelector(".memory-game-blocks").classList.add("unactive");
                checkmatch(flipblocks[0],flipblocks[1]);
                console.log(flipblocks[0],flipblocks[1])
                unclock();
        }
})
})
// for(let i=0;i<20;i++){
    // randoms(10)
// }
// let array_index=[...Array(blocks.length).keys()];
function randoms(current){
    let temp;
        // current --;
    while(current>0){
        current --;
        temp=array_index[current];
        let rand=Math.floor(Math.random()*current);
        array_index[current]=array_index[rand];
        array_index[rand]=temp
    }
    return array_index    
}
function flipblock(){
    let flipblocks=blocks.filter(function(ele){
        if (ele.classList.contains("isflipped")===true){
            return ele;
        }
    })
    if (flipblocks.length==2){
        document.querySelector(".memory-game-blocks").classList.add("unactive");
        checkmatch(flipblocks[0],flipblocks[1]);
    }
}
let tries=0;
document.querySelector(".tries span").innerHTML=tries;
button.getAttribute
function checkmatch(ele1,ele2){
    document.querySelector(".tries span")
    // document.querySelector(".tries span").innerHTML=tries;
    if(ele1.getAttribute("data")===ele2.getAttribute("data")){
        ele1.classList.remove("isflipped");
        ele2.classList.remove("isflipped");
        ele1.classList.add("ismatched");
        ele2.classList.add("ismatched");
        // document.querySelector(".memory-game-blocks").classList.remove("unactive");
    }
    else{
        tries++;
        setTimeout(function(){
            ele1.classList.remove("isflipped");
            ele2.classList.remove("isflipped");
            document.querySelector(".tries span").innerHTML=tries;
            // document.querySelector(".memory-game-blocks").classList.remove("unactive");
        },1000);
    }
}
function unclock(){
    document.querySelector(".memory-game-blocks").classList.add("unactive");
    setTimeout(function(){
        document.querySelector(".memory-game-blocks").classList.remove("unactive");
    },2000)
}
// function shuffle(){

// }