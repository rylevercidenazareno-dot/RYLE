const readBtn = document.getElementById("readBtn");
const moreText = document.getElementById("more-text");

readBtn.addEventListener("click", function(){

if(moreText.style.display==="block"){

moreText.style.display="none";
readBtn.innerHTML="Read More";

}else{

moreText.style.display="block";
readBtn.innerHTML="Show Less";

}

});