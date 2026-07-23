const readBtn = document.getElementById("readBtn");
const moreText = document.getElementById("more-text");

readBtn.addEventListener("click", () => {

    if(moreText.style.display === "block"){

        moreText.style.display = "none";
        readBtn.textContent = "Read More";

    }else{

        moreText.style.display = "block";
        readBtn.textContent = "Show Less";

    }

});