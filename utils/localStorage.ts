const nameFavorites = 'favorites';

const toggleFavoritePokemon = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem(nameFavorites) || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeid: number) => pokeid !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem(nameFavorites, JSON.stringify(favorites));
};

const utilsLS = {
  toggleFavoritePokemon
};

export default utilsLS;