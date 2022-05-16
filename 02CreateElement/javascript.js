//First find element to assign as parent node
const container = document.querySelector('#container');

//Create <p> tag and stores in paragraph variable
const paragraph= document.createElement('p');

//Need child of paragraph
const text = document.createTextNode("Hey I'm red!");
paragraph.appendChild(text);


//Append the child paragraph to container
//Remeber text is child node of paragraph and paragraph is child node of container
container.appendChild(paragraph)


const blueText = document.createElement('h3');
const blue = document.createTextNode("I am blue h3!");
blueText.appendChild(blue);
container.appendChild(blueText);


const div = document.createElement('div');
container.appendChild(div);

const h2 = document.createElement('h2');
const text2 = document.createTextNode("I am in div");
h2.appendChild(text2);
div.appendChild(h2);

const para2 = document.createElement('p');
const paratext = document.createTextNode("ME TOO!");
para2.appendChild(paratext);
div.appendChild(para2);

