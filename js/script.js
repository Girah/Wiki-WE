document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".Nav");
    const menuIcon = document.querySelector(".menuIcon");
    const closeIcon = document.querySelector(".closeIcon");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
        if (nav.classList.contains("active")) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "inline";
        } else {
            menuIcon.style.display = "inline";
            closeIcon.style.display = "none";
        }
    });
});