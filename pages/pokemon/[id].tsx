import { useEffect, useState } from 'react';
import pokemonApi from "@/apis/pokemonApi";
import { PokemonDetail } from "@/interfaces/iPokemonDetail";
import { Layout } from "@/layouts";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps } from "next";
import confetti from 'canvas-confetti';
import utilsLS from '../../utils/localStorage';

interface Props {
  pokemon: PokemonDetail
};

const PokemonDetailPage = (props: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { pokemon } = props;

  const onToggleFavorite = () => {
    if (!isFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 150,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      });
    }

    setIsFavorite(!utilsLS.isFavoritePokemon(pokemon.id));
    utilsLS.toggleFavoritePokemon(pokemon.id);
  };

  useEffect(() => {
    setIsFavorite(utilsLS.isFavoritePokemon(pokemon.id));
  }, [pokemon.id]);

  return (
    <Layout title={pokemon.name} >
      <Grid.Container
        css={{
          marginTop: '5px'
        }}
        gap={2}
      >
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height='200px'
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>

              <Button
                onClick={onToggleFavorite}
                color='gradient'
                ghost={!isFavorite}
              >
                {isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />

                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemones = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemones.map(id => ({
      params: { id }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const resApi = await pokemonApi.get<PokemonDetail>(`/pokemon/${params!.id}`);

  return {
    props: {
      pokemon: resApi.data
    }
  }
};

export default PokemonDetailPage;