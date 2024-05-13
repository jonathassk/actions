'use client';
import { useEffect, useState } from "react";
import { Travel } from "../reducers/cityReducer";

interface SearchPopUpProps {
  searchIsFocused: boolean;
  city: Travel;
  toggleFocus: () => void;
}

interface SearchPopUp { 
  consoleValue: (recent: string) => void;
}
export const SearchPopUp: React.FC<SearchPopUpProps> = ({ searchIsFocused, city, toggleFocus }) => {
  const [recents, setRecents] = useState<string[]>([]);

  useEffect(() => {
    const recentDestinations = JSON.parse(localStorage.getItem('recentDestinations') || '[]');
    setRecents(recentDestinations);
    console.log(city)
  }, []);

  const consoleValue = (recent: string): void => {
    console.log('clicked')
    console.log(recent)
  }

  return (
    <div>
      {searchIsFocused ?
        <div className="max-[640px]:w-full h-80 bg-slate-300 relative top-[10px] rounded-md">
          <div>
            {city.destination}
          </div>
          <div>
            {!city.destination && recents.map((recent, index) => {
              return (
                <div key={recent}>
                  <button onClick={() => consoleValue(recent)}>{recent}</button>
                </div>
              )
            })}
          </div>
        </div >
      : null}
    </div> 
  )
}