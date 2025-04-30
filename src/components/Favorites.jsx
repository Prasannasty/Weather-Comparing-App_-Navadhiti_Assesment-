import React from 'react';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';

const Favorites = ({ onSelect, favorites = [], onDelete }) => {
  if (!Array.isArray(favorites)) {
    console.error('Favorites is not an array:', favorites);
    favorites = [];
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">
        <TurnedInRoundedIcon /> Saved Cities
      </h3>
      <div className="flex gap-2 flex-wrap">
        {favorites.length > 0 ? (
          favorites.map((city, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1"
            >
              <button
                onClick={() => onSelect(city)}
                className="text-sm font-medium"
              >
                {city}
              </button>
              <button
                onClick={() => onDelete(city)}
                className="text-red-500 hover:text-red-700 text-lg font-bold"
              >
                <DeleteForeverRoundedIcon />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No saved cities.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;