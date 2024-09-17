var button = document.getElementById("button");
var skills = document.getElementById("hide");
button.addEventListener("click", function () {
    if (skills.style.display === "block") {
        skills.style.display = "none";
    }
    else {
        skills.style.display = "block";
    }
});
