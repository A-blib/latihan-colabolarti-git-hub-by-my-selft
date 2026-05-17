const button = document.getElementById("button");
const container = document.querySelector(".container");
const judul = document.getElementById("judul");
const background = document.getElementById("background")
const toggleButton = document.getElementById("toggle")


button.addEventListener("click", () => {
    judul.style.display = "block";
});


toggleButton.addEventListener("click", () => {
    background.classList.toggle("toggleBackground")
})
