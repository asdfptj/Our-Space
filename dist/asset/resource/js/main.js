const content = "Mysterious universe, endless exploration"
const text = document.querySelector(".main-title")
let index = 0;

function typing(){
    text.textContent += content[index++]
    if(index > content.length){
      text.textContent = "Mysterious universe, endless exploration"
    }
  }
  setInterval(typing, 70)