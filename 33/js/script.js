/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
новый фильм добавляется в список. Страница не должна перезагружаться.
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          ganre = document.querySelector('.promo__genre'),
          bg = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          mainForm = document.querySelector('form.add'),
          formInputText = mainForm.querySelector('.adding__input'),
          formInputChecbox = mainForm.querySelector('[type="checkbox"]');


    mainForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = formInputText.value;
        const newCheckbox = formInputChecbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieList, movieDB.movies);
        }
        
        mainForm.reset();
    });
    
    const advRemove = (arr) => {
         arr.forEach((item) => {
            item.remove();
         });
    };

    advRemove(adv);
    
    ganre.textContent = 'Драма';
    
    bg.style.cssText = "background: url(img/bg.jpg)";
    
    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);

    function createMovieList (parent, film) {
        parent.innerHTML = "";
        sortArr(film);
        
        film.forEach((films, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${films}
            <div class="delete"></div>
        </li>
        `;
        });

         document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieList, movieDB.movies);
            });
         });
    }
    createMovieList(movieList, movieDB.movies);

    
});
    