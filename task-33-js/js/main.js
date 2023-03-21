

// document.querySelector('button').onclick = function () {
//     let myParagraph = document.querySelector('p');
//     myParagraph.textContent = 'Product description';
// };

// document.querySelector('button').ondblclick = function () {
//     let myParagraph = document.querySelector('p');
//     myParagraph.textContent = 'Product description Product description';
// };

let myParagraph = document.getElementById("description");

let myButton = document.querySelector('button');
myButton.onclick = function () {
    myParagraph.textContent = "This is a paragraph.";
}



