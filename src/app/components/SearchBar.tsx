import React, { useRef, useReducer, Dispatch } from 'react';
import { SearchPopUp } from './SearchPopUp';
import { createContext } from 'vm';
import { CityReducer, initialState, Travel, Action } from '../reducers/cityReducer';

const SearchBar: React.FC = () => {

  const [travel, dispatch] = useReducer(CityReducer, initialState) as [Travel, Dispatch<Action>];
  const [isFocused, setIsFocused] = React.useState(false);

  const createPlanning = () => {
    const destination = document.getElementById('Destination') as HTMLInputElement;
    if (destination?.value === "" || destination?.value === null) return;
    const recentValues: string[] = JSON.parse(localStorage.getItem('recentDestinations') || '[]');
    if (recentValues.length === 5) {
      recentValues.shift();
    }
    recentValues.push(destination.value);
    localStorage.setItem('recentDestinations', JSON.stringify(recentValues));
    console.log(JSON.stringify(localStorage.getItem('recentDestinations')));
  };

  const sendSearchValue = () => {
    const searchValue = document.getElementById('Destination') as HTMLInputElement;
    dispatch({type: 'SET_DESTINATION', payload: searchValue?.value});
    console.log(searchValue?.value);
    return searchValue?.value;
  };

  const teste = () => {
    console.log(travel);
  };

  const toggleFocus = () => {
    setIsFocused(true);
  }

  const toggleBlur = () => {
    setIsFocused(false);
  }
  return (
    <div className='px-20 max-[530px]:px-4 w-full' onFocus={toggleFocus} onBlur={toggleBlur} onClick={toggleFocus}>
      <div className='flex mx-auto content-center'>
        <input
          id="Destination"
          type="text"
          className="px-3 text-lg text-gray-800 border-2 border-gray-300 rounded-md h-16 decoration-0 w-full relative left-10 max-[640px]:left-0 max-[640px]:rounded-none bg-gray-100 focus:outline-none focus:bg-white rounded-l-lg"
          onChange={sendSearchValue}
        />
        <button
          className="relative mx-auto top-3 right-11 bg-cyan-700 text-white w-20 h-10 rounded-md max-[640px]:right-0 max-[640px]:h-16 max-[640px]:top-0 max-[640px]:rounded-none"
          onClick={createPlanning}
        >
          SEARCH
        </button>
      </div>
      <SearchPopUp searchIsFocused={isFocused} city={travel} toggleFocus={toggleFocus}/>
    </div>
  );
}

export default SearchBar;