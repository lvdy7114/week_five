let titleEl = document.getElementById("title");
titleEl.style.textAlign = "center";
let pEl = document.querySelector(".cool");
console.log(pEl);

let commentEls = document.querySelectorAll(".comment");

for (let c of commentEls) {
  c.style.backgroundColor = "red";
  c.style.fontSize = "35px";
}

let li = document.getElementsByTagName("li");

let myArray = Array.prototype.slice.call(li, 1, 3);

let comments = document.querySelector("#comments");
console.log(comments.firstChild);
console.log(comments.lastChild);
///creating a new item
const newLi = document.createElement("li");
const newLiTwo = document.createElement("li");
const p = document.createElement("p");
let lastItem = document.querySelector("#lastItem");

//adding text to an element
newLi.innerText = "new item appended!";
newLiTwo.innerText = "new item prepended!";
p.innerText = "new para";
const commentList = document.getElementById("comments");
//appending a new item to the end of an element
lastItem.append(newLi);
//prepending a new item to the beginning of an element
lastItem.prepend(newLiTwo);

const listItem = document.createElement("li");
listItem.innerText = "new item";

const listItem2 = document.createElement("li");
listItem2.innerText = "new item 2";

commentList.append(listItem);

//removing an element
// listItem.remove();

//replacing an element
listItem.replaceWith(listItem2);

const upEl = document.querySelector("#upEl");

upEl.textContent = "Im the new text content";

//changing attributes

let linkElement = document.querySelector("#googleLink");

linkElement.href = "https://www.google.com";

//adding a class
linkElement.classList.add("foo");

//removing a class
// linkElement.classList.remove("foo");
// linkElement.classList.toggle("foo");
linkElement.classList.replace("foo", "bar");