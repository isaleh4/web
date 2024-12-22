let correctAnswer = 2; 
let allChoices = document.querySelectorAll(".choice-container");

for (let i = 0; i < allChoices.length; i++) {
    allChoices[i].addEventListener("click", 
        function () {
        for (let j = 0; j < allChoices.length; j++) {
            let icon = allChoices[j].querySelector(".icon");

            let newIcon = document.createElement("span");
            newIcon.classList.add("icon");

            if (j === correctAnswer-1) {//because count start from zero index
                newIcon.textContent = "✅";
            } else {
                newIcon.textContent = "❌";
            }

            allChoices[j].appendChild(newIcon);
        }
    }
    );
}  


let menuemoji = document.querySelector(".menu-emoji");
let menuList = document.querySelector(".menu-list");


menuemoji.addEventListener("click", function() {
    if (menuList.style.display === "block") {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
});
