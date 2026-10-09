const menuButton = document.querySelector("#menu-button");
const menuIcon = document.querySelector(".menu-icon");
const close = document.querySelector(".close-icon");
const menu = document.querySelector(".header-nav");
const chooseTileButton = document.querySelector(".types");
const measureButton = document.querySelector(".measurements");
const tileCalculationButton = document.querySelector(".Calculations");
const planButton = document.querySelector(".plans");
    //  variables for the show menu function 
const choosingContent = document.querySelector(".choosing");
const measureContent = document.querySelector(".Measuring");
const calcContent = document.querySelector(".calculating");
const plansContent = document.querySelector(".Planer");

 const currentYear = new Date().getFullYear();

 document.getElementById("currentyear").textContent = currentYear;

 document.getElementById("lastModified").innerHTML = `Last Modified ${document.lastModified}`;






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
    // const open = menuButton.getAttribute("aria-expanded") === "true";

    // menuIcon.hidden = open;
    // close.hidden = !open;

    // menuButton.setAttribute("aria-expanded", !open);
});

function showMenu (button, aVariable) {
    button.addEventListener("click", function(){
        aVariable.classList.toggle("closed");

        const isitOpen = aVariable.classList.contains("closed") === false;
    
        button.setAttribute("aria-expanded", !isitOpen);
        button.setAttribute(
            "aria-label",
            isitOpen ? "Open option menu" : "Close option menu"
        );
    });

};

showMenu(chooseTileButton,choosingContent);
showMenu(measureButton, measureContent);
showMenu(tileCalculationButton, calcContent);
showMenu(planButton, plansContent);
