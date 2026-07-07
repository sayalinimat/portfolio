// Typing Animation

const text = [
    "BCS Student",
    "Aspiring Software Developer",
    "Frontend Developer",
    "Quick Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const typing = document.querySelector(".typing");

    if (typing) {
        typing.textContent = letter;
    }

    if (letter.length === currentText.length) {
        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 100);

    }

})();


// Smooth Scroll

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior:'smooth'

        });

    });

});


// Scroll Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="0.8s ease";

observer.observe(section);

});
