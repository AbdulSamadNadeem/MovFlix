import React from 'react';
import { genresMapping } from '../../Const/Utils/app.js';

const Dropdown = ({ setGenre, data }) => {
 

  const dropdownData = (data) => {
    const genres = data.flatMap((item) => item.genre);
    return [...new Set(genres)];
  };

  const uniqueGenres = dropdownData(data);


  const handleDropdown = (value) => {
    setGenre(value);
  };

  return (
    <>
      <select
        name=""
        id=""
        onChange={(e) => handleDropdown(e.target.value)}
        className='ml-10 mt-20 w-40 h-10 bg-black border border-yellow-400 outline-none rounded-lg text-yellow-500'
      >
        <option className='text-white text-center' value="All">All Categories</option>
        {uniqueGenres.map((genre) => {
          const genreName = genresMapping[genre]; 
          return (
            <option
              key={genre} 
              className='ml-10 mt-20 w-40 h-10 bg-black border border-yellow-400 outline-none rounded-lg text-yellow-500 text-center font-semibold'
              value={genre}
            >
              {genreName || genre} 
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
