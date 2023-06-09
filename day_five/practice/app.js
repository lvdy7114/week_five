const btn = document.querySelector('#btn');
const dark = document.querySelector('#dark-mode');
const light = document.querySelector('#light-mode');

const body = document.querySelector("body");

function darkMode() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
}

function lightMode() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
}

dark.addEventListener("click",darkMode);
light.addEventListener("click",lightMode);

btn.addEventListener('click', function(evt) {
	// testing!
    const li = document.createElement("li");
    const inp = document.querySelector('input');
    li.textContent = inp.value;
    document.querySelector('ul').appendChild(li);
    inp.value = "";
	console.log(evt);  
});

document.querySelector("ul").addEventListener("click", handleClick);

//document.querySelector("ul").removeEventListener("click",handleClick);

/*document.querySelector('ul')
	.addEventListener('click', handleClick);*/

function handleClick(evt) {
	if (evt.target.tagName == "li") {
		// do something special
        evt.target.style.color = "red";
        evt.target.remove();
	}

	console.log(evt);
}

const parent = document.querySelector("p");
const child = document.querySelector("strong");

parent.addEventListener("click", function() {
    console.log("parent")
}, true
);

child.addEventListener("click", function() {
    console.log("child")
});

btn.removeEventListener('click', handleClick);