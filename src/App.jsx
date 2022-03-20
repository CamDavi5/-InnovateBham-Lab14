import React, { useState, useEffect } from 'react';
import GhibliFilm from './components/GhibliFilm';
import GhibliPerson from './components/GhibliPerson';

const App = () => {
    const [ filmsBool, setFilmsBool ] = useState(false);
    const [ peopleBool, setPeopleBool ] = useState(false);
    const [ films, setFilms] = useState([]);
    const [ people, setPeople] = useState([]);

    useEffect (() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(allFilms => {
                console.log(allFilms);
                setFilms(allFilms);
            });

        fetch('https://ghibliapi.herokuapp.com/people')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(allPeople => {
                console.log(allPeople);
                setPeople(allPeople);
            });
    }, []);

    const loadFilms = () => {
        setPeopleBool(false);
        setFilmsBool(true);
    }

    const loadPeople = () => {
        setFilmsBool(false);
        setPeopleBool(true);
    }

    return (
        <div>
            <header>
                <h1 id="title">Ghibli API Test</h1>
            </header>
            <div id="btnContainer">
                <button onClick={loadFilms} id='filmsBtn'>Load Films</button>
                <button onClick={loadPeople} id='peopleBtn'>Load People</button>
            </div>
            <div className="row">
                {filmsBool == true &&
                    films.map((film) => <GhibliFilm key={film.id} title={film.title} description={film.description} image={film.image}/>) 
                }
                {peopleBool == true &&
                    people.map((person) => <GhibliPerson key={person.id} name={person.name} age={person.age} gender={person.gender} url={person.url}/>)
                }
            </div>
        </div>
    );
};

export default App;