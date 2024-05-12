'use client';
import { useEffect, useState } from "react";
import { Travel } from "../reducers/cityReducer";

interface SearchPopUpProps {
  searchIsFocused: boolean;
  city: Travel;
  toggleFocus: () => void;
}
export const SearchPopUp: React.FC<SearchPopUpProps> = ({ searchIsFocused, city, toggleFocus }) => {
  const [recents, setRecents] = useState<string[]>([]);

  useEffect(() => {
    const recentDestinations = JSON.parse(localStorage.getItem('recentDestinations') || '[]');
    setRecents(recentDestinations);
    console.log("alo");
    console.log(searchIsFocused);
  }, []);


  const handleDivClick = (e: React.MouseEvent<HTMLDivElement>) => {
    toggleFocus();
  };

  return (
    <div onClick={handleDivClick}>
      {searchIsFocused ?
        <div className="max-[640px]:w-full h-80 bg-slate-300 relative top-[10px] rounded-md">
          <div>
            {city.destination}
          </div>
          <div>
            {recents.map((recent, index) => {
              return (
                <div key={recent}>
                  {recent}
                </div>
              )
            })}
          </div>
        </div >
      : null}
    </div> 
  )
}