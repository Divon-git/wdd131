const menuButton = document.querySelector("#menu-button");
const menuIcon = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const menu = document.querySelector(".main-nav");

menuButton.addEventListener("click", function(){

    menuIcon.classList.toggle("open");
    close.classList.toggle("closed");
    menu.classList.toggle("closed");

    // Check whether the menu is currently open
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

// Update the accessibility attributes
    menuButton.setAttribute("aria-expanded", !isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Open navigation menu" : "Close navigation menu"
    );
   
});
