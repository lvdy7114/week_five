// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

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
let topMenuEl = document.querySelector('#top-menu');

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

