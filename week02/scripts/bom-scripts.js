const inputaValue = document.querySelector("#favchap");

const button = document.querySelector("buutton");

const ulList = document.querySelector("ul");

const newList = document.createElement("li");
newList.textContent = inputaValue.value;
const deleteButton = document.createElement("button");
deleteButton.textContent = "❌";
deleteButton.setAttribute("aria-label", "Close");
deleteButton.id = "close-button";
newList.append(deleteButton);
ulList.append(newList);
