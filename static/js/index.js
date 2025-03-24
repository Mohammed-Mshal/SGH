const toggleBTN = document.querySelector(".toggle-links");
const listLinks = document.querySelector(".list-links");
toggleBTN.addEventListener("click", (e) => {
    listLinks.classList.contains("toggled")?
    listLinks.classList.remove("toggled"):
    listLinks.classList.add("toggled");
});
