import React, { useContext, useState } from 'react';
import ActionMoviesCards from '../Components/Cards/ActionMoviesCards/ActionMoviesCards';
import Header from '../Components/Header/Header';
import Dropdown from '../Components/Common/Dropdown/Dropdown';
import Subscription from '../Components/Subscription/Subscription';
import Footer from '../Components/Footer/Footer';
import { MoviedataContext } from '../Context/MoviesContext/MovieContext';

const ActionPage = () => {
  const {Action} = useContext(MoviedataContext)
  const [movies, setMovies] = useState('');
  const [genre, setGenre] = useState('All');


  const filterMovies = Action.filter((item) => 
    item.title.toLowerCase().includes(movies.toLowerCase())
  );

  
  const filteredByGenre = genre === 'All' ? filterMovies : filterMovies.filter((item) => 
    item.genre.includes(Number(genre))
  );

  console.log(filteredByGenre);

  return (
    <>
      <Header setMovies={setMovies} />
      <Dropdown data={Action} setGenre={setGenre} />
      {
        filteredByGenre.length > 0 
          ? <ActionMoviesCards data={filteredByGenre} />
          : <h1>No Movie Found</h1>
      }
         <Subscription/>
         <Footer/>
    </>
  );
};

export default ActionPage;


