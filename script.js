const texts = [
  "Frontend Developer",
  "Web Developer",
  "JavaScript Learner"
];

let textIndex = 0;
let charIndex = 0;

const textElement = document.querySelector(".multiple-text");

function typeText(){

  if(charIndex < texts[textIndex].length){

    textElement.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeText, 100);

  }else{

    setTimeout(eraseText, 1000);
  }
}

function eraseText(){

  if(charIndex > 0){

    textElement.textContent =
      texts[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseText, 50);

  }else{

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    setTimeout(typeText, 500);
  }
}

typeText();