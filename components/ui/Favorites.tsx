import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  favorites: number[]
}

const Favorites = (props: Props) => {
  const { favorites } = props;
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid.Container
      gap={2}
      direction='row'
      justify='flex-start'
    >
      {
        favorites.map(pokemon => (
          <Grid key={pokemon} xs={6} sm={3} md={2} xl={1}>
            <Card
              isHoverable
              isPressable
              css={{ padding: 10 }}
              onClick={() => handleClick(pokemon)}
            >
              <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
              />
            </Card>
          </Grid>
        ))
      }
    </Grid.Container>
  );
};

export default Favorites;