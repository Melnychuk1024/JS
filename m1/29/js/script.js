'use strict';

const idBox = document.getElementById('box'),
      optionOne = document.getElementsByTagName('button'),
      optionTwo = document.querySelectorAll('button'),
      idCircle = document.querySelectorAll('.circle'),
      heart = document.querySelectorAll('.heart'),
      wrapper = document.querySelector('.wrapper');

// idBox.style.backgroundColor = 'blue';
// idBox.style.width = '500px';
// idBox.style.height = '200px';

// optionTwo[1].style.borderRadius = "500px";

// const color = 'red';
// const width = 600;

// idBox.style.cssText = `background-color: ${color}; width: ${width}px `;

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.cssText = 'background-color: blue; width: 150px; height: 100px';
// }

// heart.forEach(item => {
//     item.style.backgroundColor = 'yellow';
// });

const nameOne = document.createElement('div');
nameOne.classList.add('black');
document.body.append(nameOne);

// document.querySelector('.wrapper').append(nameOne); 

// wrapper.prepend(nameOne);

// heart[2].before(nameOne);
// heart[2].after(nameOne);

// heart[0].remove();

heart[0].replaceWith(optionTwo[0]);

nameOne.innerHTML = "<h1>Hello Wolrd</h1>";
// nameOne.textContent = "Hello";

nameOne.insertAdjacentHTML('afterend', '<h2>Hell</h2>');
