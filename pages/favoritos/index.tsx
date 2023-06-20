import { useState, useEffect } from 'react';
import NoFavorites from '@/components/ui/NoFavorites';
import { Layout } from '@/layouts';
import utilsLS from '@/utils/localStorage';
import Favorites from '@/components/ui/Favorites';

const Index = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(utilsLS.pokemonsFavorites());
  }, []);

  return (
    <Layout title='Favoritos'>
      {favorites.length > 0 ?
        <Favorites favorites={favorites} /> :
        <NoFavorites />}
    </Layout>
  );
};

export default Index;