 const currentYear = new Date().getFullYear();

 document.getElementById("currentyear").textContent = currentYear;

 document.getElementById("lastModified").innerHTML = `Last Modified ${document.lastModified}`;


const wChill = document.querySelector(".wind-chill");

const windSpeed = 11.2
const temperature = 79

function calculateWindChill(windSpeed, temperature) {
    return (35.74 + (0.6215 * temperature)) - 35.75 * (windSpeed **0.16) + (0.4275 * temperature) * (windSpeed**0.16);
}


if (temperature <= 50 && windSpeed > 3) {
    wChill.textContent = calculateWindChill(windSpeed, temperature);
} else {
    wChill.textContent = "N/A";
}