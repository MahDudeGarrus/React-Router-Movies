import React, { useState, useEffect } from 'react';
import axios from 'axios';

//SAS - importing dependencies
import { Route } from 'react-router-dom';

//SAS - component imports
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state

          //SAS - console successfully showed data, setMovieList gives movieList new data.
          //console.log(response.data)
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  
  //SAS - data successfully passed into state
  //console.log(movieList)

  // const addToSavedList = id => {
  //   // This is stretch. Prevent the same movie from being "saved" more than once
  // };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>
        <Route exact path='/' render={() => <MovieList movies={movieList} />} />

        <Route path='/movies/:id'><Movie /></Route> 
      </div>
    </div>
  );
}