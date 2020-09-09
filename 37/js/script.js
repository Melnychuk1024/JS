const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));

// console.log(btns[0].classList.add('red'));

// console.log(btns[0].classList.remove('hello'));

// console.log(btns[0].classList.toggle('hello'));   ?????????


// if(btns[0].classList.contains('red')) {
//     console.log('it is OK, this red')
// } else {
//     console.log('error');
// }


// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }

    // btns[1].classList.toggle('red');
// });


wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.tagName == "BUTTON") {
        console.log('hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);