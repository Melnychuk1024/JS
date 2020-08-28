/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) DONE

2) Изменить жанр фильма, поменять "комедия" на "драма" DONE

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising = document.querySelectorAll('.promo__adv img'),
      ganre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      itemText = document.querySelectorAll('.promo__interactive-item'); 

advertising.forEach(item => {
    item.remove();
});

ganre.textContent = 'Драма';

bg.style.cssText = "background: url(img/bg.jpg)";

movieDB.movies.sort();

for(let i = 0; i < itemText.length; i++) {
    itemText[i].innerHTML = `<li>${i + 1} ${movieDB.movies[i]}</li>`;
}





