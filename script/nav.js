const bars = document.getElementById("hamburger-top-container");
const drop = document.getElementsByClassName("dropdown-button-container")[0];
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("hamb")) {
        bars.classList.toggle("active");
    }
    else if (e.target.classList.contains("drop")) {
        drop.classList.toggle("active");
    }
    else if (bars.classList.contains("active")) {
        bars.classList.toggle("active");
    }
}
)
