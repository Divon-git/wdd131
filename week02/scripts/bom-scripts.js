const inputaValue = document.querySelector("#favchap");

const button = document.querySelector("button");

const ulList = document.querySelector("ul");



button.addEventListener("click", function(){
  if (inputaValue.value.trim() !== "") {
    const newList = document.createElement("li");
    newList.textContent = inputaValue.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.setAttribute("aria-label", "Close");
    deleteButton.id = "close-button";
    newList.append(deleteButton);
    ulList.append(newList);
    inputaValue.focus();
    inputaValue.value = '';
    deleteButton.addEventListener("click", function() {
        newList.remove();
        inputaValue.focus();
    })
}
});