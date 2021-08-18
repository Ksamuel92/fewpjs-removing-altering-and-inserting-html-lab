// Write your code here!
const element = document.querySelector('main');
element.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Kyle is the champion";
newHeader.className = 'victory';
