import { Container, Text } from '@nextui-org/react';
import React from 'react';

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}
    >
      <Text h1>No Hay Favoritos</Text>
    </Container>
  );
};

export default NoFavorites;