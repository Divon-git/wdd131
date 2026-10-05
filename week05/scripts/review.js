const reviewCount = document.querySelector("#reviewCount");

const count = Number(localStorage.getItem("reviewCount") ?? 0);

const newCount = count + 1;

localStorage.setItem("reviewCount", newCount);

reviewCount.textContent = newCount;



const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = `Last Modified ${document.lastModified}`;

