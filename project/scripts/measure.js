
const STORAGE_KEY = "tileSettingsSavedRooms";

// Get the HTML elements to work with.
const measurementForm = document.querySelector("#measurementForm");
const roomNameInput = document.querySelector("#roomName");
const roomLengthInput = document.querySelector("#roomLength");
const roomWidthInput = document.querySelector("#roomWidth");
const savedRoomsList = document.querySelector("#savedRoomsList");
const emptyMessage = document.querySelector("#emptyMessage");
const totalArea = document.querySelector("#totalArea");
const formMessage = document.querySelector("#formMessage");
const clearRoomsButton = document.querySelector("#clearRoomsButton");


// Read saved rooms from localStorage.
function getSavedRooms() {
    try {
        const storedRooms = localStorage.getItem(STORAGE_KEY);

        if (storedRooms === null) {
            return [];
        }

        const rooms = JSON.parse(storedRooms);

        // Make sure the stored information is an array.
        return Array.isArray(rooms) ? rooms : [];
    } catch (error) {
        console.error("Could not read saved rooms:", error);
        return [];
    }
}

// Keep the saved rooms available to the rest of the script.
let savedRooms = getSavedRooms();

// Save the current array of rooms in localStorage.
function saveRooms() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedRooms));
        return true;
    } catch (error) {
        console.error("Could not save rooms:", error);
        return false;
    }
}

// message.
function showMessage(message, messageType) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${messageType}`;
}

// Create and display one saved room card.
function createRoomCard(room) {
    const card = document.createElement("article");
    card.classList.add("room-card");

    const details = document.createElement("div");

    const heading = document.createElement("h4");
    heading.textContent = room.name;

    const dimensions = document.createElement("p");
    dimensions.textContent =
        `Length: ${room.length} m × Width: ${room.width} m`;

    const area = document.createElement("p");
    area.classList.add("room-area");
    area.textContent = `${room.area.toFixed(2)} m²`;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-room-button");
    deleteButton.textContent = "Delete Room";
    deleteButton.dataset.roomId = room.id;
    deleteButton.setAttribute("aria-label", `Delete ${room.name}`);

    details.append(heading, dimensions, area);
    card.append(details, deleteButton);

    return card;
}

// Display all saved rooms and calculate their combined area.
function displaySavedRooms() {
    savedRoomsList.replaceChildren();

    let combinedArea = 0;

    savedRooms.forEach(function (room) {
        const roomCard = createRoomCard(room);
        savedRoomsList.appendChild(roomCard);

        combinedArea += room.area;
    });

    // Show the empty message only when there are no rooms.
    emptyMessage.hidden = savedRooms.length > 0;

    // Display the combined floor area.
    totalArea.textContent = `${combinedArea.toFixed(2)} m²`;
}

// Handle the form submission.
measurementForm.addEventListener("submit", function (event) {
    // Stop the form from reloading the page.
    event.preventDefault();

    const name = roomNameInput.value.trim();
    const length = Number(roomLengthInput.value);
    const width = Number(roomWidthInput.value);

    // Check that the values are valid.
    if (
        name === "" ||
        !Number.isFinite(length) ||
        !Number.isFinite(width) ||
        length <= 0 ||
        width <= 0 ||
        length > 1000 ||
        width > 1000
    ) {
        showMessage(
            "Please enter a room name and valid dimensions greater than zero.",
            "error"
        );
        return;
    }

    // Calculate the room's floor area.
    const area = length * width;

    // Create an object to represent this room.
    const newRoom = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: name,
        length: length,
        width: width,
        area: area
    };

    // Add the new room to the array.
    savedRooms.push(newRoom);

    // Store the updated array in the browser.
    if (!saveRooms()) {
        savedRooms.pop();

        showMessage(
            "Your room could not be saved. Check your browser's storage settings.",
            "error"
        );
        return;
    }

    // Refresh the display.
    displaySavedRooms();

    // Tell the visitor the calculation was successful.
    showMessage(
        `${name} saved successfully. Its floor area is ${area.toFixed(2)} m².`,
        "success"
    );

    // Clear the form for the next room.
    measurementForm.reset();
    roomNameInput.focus();
});

// Delete an individual room.
savedRoomsList.addEventListener("click", function (event) {
    if (!event.target.matches(".delete-room-button")) {
        return;
    }

    const roomId = event.target.dataset.roomId;

    // Keep a copy in case saving the deletion fails.
    const previousRooms = savedRooms;

    savedRooms = savedRooms.filter(function (room) {
        return room.id !== roomId;
    });

    if (!saveRooms()) {
        savedRooms = previousRooms;

        showMessage(
            "The room could not be deleted from storage.",
            "error"
        );
        return;
    }

    displaySavedRooms();
    showMessage("Room deleted.", "success");
});

// Delete every saved room.
clearRoomsButton.addEventListener("click", function () {
    if (savedRooms.length === 0) {
        showMessage("There are no saved rooms to clear.", "error");
        return;
    }

    const shouldClear = window.confirm(
        "Are you sure you want to delete all saved room measurements?"
    );

    if (!shouldClear) {
        return;
    }

    const previousRooms = savedRooms;
    savedRooms = [];

    if (!saveRooms()) {
        savedRooms = previousRooms;

        showMessage(
            "Your saved rooms could not be cleared.",
            "error"
        );
        return;
    }

    displaySavedRooms();
    showMessage("All saved room measurements have been cleared.", "success");
});

// Update the footer year.
 const currentYear = new Date().getFullYear();

 document.getElementById("currentyear").textContent = currentYear;

 document.getElementById("lastModified").innerHTML = `Last Modified ${document.lastModified}`;




// Show any rooms saved during an earlier visit.
displaySavedRooms();
