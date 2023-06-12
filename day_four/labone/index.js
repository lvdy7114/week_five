// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

/////////////////DOM Manipulation Lab 1 starts here//////////////////////////
//1. select and cache the <main> element
let mainE1 = document.querySelector('main');

/*2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
*/
mainE1.style.backgroundColor = 'var(--main-bg)';

//3. Set the content of mainEl to <h1>DOM Manipulation</h1>
mainE1.innerHTML = "<h1>DOM Manipulation</h1>";

//4. Add a class of flex-ctr to mainEl.
mainE1.classList.add('flex-ctr');

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");
//const topMenuEl = document.getElementById('top-menu');

//Set the height topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(function(link) {
    let aElement = document.createElement('a'); //Create an <a> element.
    aElement.setAttribute('href', link.href); //On the new element, add an href attribute with its value set to the href property of the "link" object.
    aElement.textContent = link.text;  //Set the new element's content to the value of the text property of the "link" object.
    topMenuEl.appendChild(aElement); //Append the new element to the topMenuEl element. 
}); 

/////////////////DOM Manipulation Lab 1 ends here//////////////////////////


////////////////////Dom Manipulation Lab 2 starts here/////////////////////////////////
//1. select and cache the <nav id="sub-menu"> element in a variable named subMenuEl
const subMenuEl = document.getElementById("sub-menu");

//2. Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';

//3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'; 

//4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

//5. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

//6. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

//7. Update the menuLinks array in index.js to this: 
//*-updated at the top********^^^^

//8. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");

//9. Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

/*10. Attach a delegated 'click' event listener to topMenuEl.
The first line of code of the event listener function should call the event object's preventDefault() method.
The second line of code of the function should immediately return if the element clicked was not an <a> element.
console.log the content of the <a> to verify the handler is working.
11. In the event listener, if the clicked <a> link has a class of active:
Remove the active class from the clicked <a> element.
Set the showingSubMenu to false.
Set the CSS top property of subMenuEl to 0.
return to exit the handler.
13. in here
14. for loop
15. in here
16 - 20 in here.
*/

function removeClassActive() {
  for (let i = 0; i < topMenuLinks.length; i++ ) {
    topMenuLinks[i].classList.remove('active');
  }
}

topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.tagName !== 'A') {
    return;
  }
removeClassActive();

event.target.classList.add('active');

let subArray = menuLinks.findIndex(obj => obj.text == event.target.textContent);
if(menuLinks[subArray].subLinks) {
  showingSubMenu = true;
}
else {
  showingSubMenu = false;
  updateMainContent(); //have a function or show the about here 
}
if(showingSubMenu === true) {
  let subLinks = menuLinks[subArray].subLinks;
  buildSubMenu(subLinks);
  subMenuEl.style.top = '100%';
}
else {
  subMenuEl.style.top = "0";
}

});

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = " ";
 
   for(link of subLinks) {
     let newElement = document.createElement('a');
     newElement.setAttribute('href',link.href);
     newElement.textContent = link.text;
     subMenuEl.append(newElement);
   }
 }

subMenuEl.addEventListener('click',function(event) {
  event.preventDefault();
  if(event.target.tagName != 'A') {
    return;
  }
  removeClassActive();

  showingSubMenu = false;
  subMenuEl.style.top = '0';
  updateMainContent();
});

function updateMainContent() {
  mainEl = document.getElementsByTagName('h1');
  const aboutHeader = document.createTextNode( "About" );  //not in h1, but close. tried using innerhtml, keep getting errors.
  mainE1.innerHTML = ' ';
  mainE1.appendChild(aboutHeader);
  
}
