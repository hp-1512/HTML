const targetDiv = document.getElementById("side-bar");
const btn = document.getElementById("menu");
btn.onclick = function () {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};