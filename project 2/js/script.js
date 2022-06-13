
'use strict';

document.addEventListener('DOMContentLoaded', () =>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promo = document.querySelectorAll('.promo__adv img'),
        img = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        ad = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
        
        addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilms = ad.value;
        const favorit = checkbox.checked;

        if(favorit) {
            console.log('добавляем в любимые фильмы')
        }
        
        if(newFilms) {

            if(newFilms.length > 21){
                newFilms = `${newFilms.substring(0, 21)}...`
            }

        movieDB.movies.push(newFilms);
        
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);     
        };

  
        
        e.target.reset();

        });



        const promoRemove = (adv) => {
            adv.forEach(item=> {
                item.remove();
            });
        };
        
        // удаляем рекламу
        const makeChange = () => {
        genre.textContent = 'Драма';
        img.style.backgroundImage = 'url("img/bg.jpg")';
        };

        // вносим изменения

        const sortArr = (arr) =>{
            arr.sort();
        };

        function createMovieList(films, parrent) {
            parrent.innerHTML = "";

            sortArr(films);

            films.forEach((film, i) => {
                parrent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1}: ${film}
                    <div class="delete"></div>
                </li>
                `;
            });

            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);

                    createMovieList(films, parrent);

                    
                });
            });
        }
  // сортируем фильмы
        createMovieList(movieDB.movies, movieList);
        makeChange();
        promoRemove(promo);


    });










