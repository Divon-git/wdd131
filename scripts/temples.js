const navigation = document.querySelector(".navMenu");
const hambugerMenu = document.querySelector("#menu");

hambugerMenu.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambugerMenu.classList.toggle("open");

});

 const currentYear = new Date().getFullYear();

 document.getElementById("currentyear").textContent = currentYear;

 document.getElementById("lastModified").innerHTML = `Last Modified ${document.lastModified}`;