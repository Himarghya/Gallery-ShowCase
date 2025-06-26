const PicContainer = document.getElementById("PicContainer");
const next = document.getElementById("Next");
const previous = document.getElementById("Previous");
console.log(previous);
let x = 0;
next.addEventListener("click", ()=>
{
   previousPicture()
    
})
previous.addEventListener("click", ()=>
{
    nextPicture()
})
function nextPicture(){
    x = x + 45;
    PicContainer.style.transform = `perspective(800px) rotateY(${x}deg)`;
}
function previousPicture(){
    x = x-45;
    PicContainer.style.transform = `perspective(800px) rotateY(${x}deg)`;
}
setInterval(() =>{
  nextPicture()
}, 4000);