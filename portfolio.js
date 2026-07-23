const words = [
"Electronics Engineering Student",
"Embedded Systems Developer",
"IoT Enthusiast",
"Arduino Programmer",
"Web Developer"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

if(charIndex < words[wordIndex].length){

typing.textContent += words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex>0){

typing.textContent=words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}
else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(typeEffect,300);

}

}

typeEffect();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_sgm08jr",
        "template_k17cnyx",
        this
    )
    .then(function () {

        alert("Message sent successfully!");

        form.reset();

    })
    .catch(function (error) {

        alert("Failed to send message.");

        console.log(error);

    });

});

const body = document.body;
const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark-mode";
body.classList.add(savedTheme);

updateButton();

themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("theme", "light-mode");
    } else {
        body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("theme", "dark-mode");
    }

    updateButton();
});

function updateButton() {
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀️ Light Mode";
    }
}