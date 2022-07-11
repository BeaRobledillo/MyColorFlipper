let colorsArray=["red","blue","yellow","purple","pink"];
const btn = document.getElementById('btn');
let color=document.getElementById('color');
let randomNumber;
btn.addEventListener("click", function (){
    randomNumber = getRandomNumber();
    document.body.style.backgroundColor=colorsArray[randomNumber];
    print();
}
);

function getRandomNumber(){
    return Math.floor(Math.random()*colorsArray.length);
}
function print(){
    /*document.getElementById('color').innerHTML="colorsArray[randomNumber]";*/
    document.getElementById('color').innerHTML=colorsArray[randomNumber];
}
