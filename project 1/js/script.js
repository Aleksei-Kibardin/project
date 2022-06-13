'use strict'


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

    },

    rememberMyFilms: function () {
    for ( var i = 0; i < 2 ; i++ ){
        const a = prompt( 'Один из последних просмотренных фильмов', ''),
              b = prompt('На сколько оцените его?', '');
        if(a != null && b !== null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log ('done');
        } else {
            console.log('ERROR');
            i--;
            }
        }
    },
    
    detectPersonalLevel: function () {
    if (personalMovieDB.count < 10 ) {
        console.log('мало');
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log('мало но хоть сколь ко то');
    } else if(personalMovieDB.count > 30){
        console.log(' не ну намана, мужиииик!');
    } else{
        console.log(eror);
        }
    },



    showMyDB: function (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
            } else {
            personalMovieDB.privat = true;
            }
    },

    writeYourGenres: function () {
    for ( var i = 1; i < 2 ; i++){
        let a = prompt( `введите апши любимые жанры через запятую` ).toLocaleLowerCase;
        if(a != null && a != ''){
            personalMovieDB.genres = a.split(', ');
            personalMovieDB.genres.sort();
            console.log ('done');
        } else {
            console.log('ERROR');
            i--;
            }
        }
        personalMovieDB.genres.forEach((item, i)=>{
        console.log(`Любимый жанр под номером ${i + 1} - это ${item}`);
    })
    }





};
