const addButton = document.getElementById("add");
const deleteButton = document.getElementById("delete");
const text = document.getElementById("text");

addButton.addEventListener("click", () => {
    text.innerText = "This is a sample text.";
});

deleteButton.addEventListener("click", () => {
    text.innerText = "";
});
