import React from 'react';

const createPlanning = () => {
  const destination = document.getElementById('Destination');
  if (destination?.value == null) return;
  const recentValues : string[] = JSON.parse(localStorage.getItem('recentDestinations') || '[]');
  if (recentValues.length == 5) {
    recentValues.shift()
  }
  recentValues.push(destination.value);
  localStorage.setItem('recentDestinations', JSON.stringify(recentValues));
 // console.log(JSON.stringify(localStorage.getItem('recentDestinations')));
}


const SearchBar = () => {
  return(
    <div className='flex mx-auto content-center px-20 max-[530px]:px-4 w-full'>
      <input id="Destination" type="text"
             className="px-3 text-lg text-gray-800 border-2 border-gray-300 rounded-md max-[640px]:w-full h-16 decoration-0 w-full relative left-10 max-[640px]:left-0 max-[640px]:rounded-none bg-gray-100 focus:outline-none focus:bg-white rounded-l-lg"/>
      <button className="relative mx-auto top-3 right-10 bg-cyan-700 text-white w-20 h-10 rounded-md max-[640px]:right-0 max-[640px]:h-16 max-[640px]:top-0 max-[640px]:rounded-none " onClick={createPlanning}> SEARCH </button>
    </div>
  );
}

export default SearchBar;