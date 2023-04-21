import { Layout } from "@/layouts";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticProps } from "next";
import pokemonApi from "@/apis/pokemonApi";
import { PokemonResponse, Result } from "@/interfaces/pokemonInterface";

interface IHomeProps {
  pokemons: Result[]
}

export default function Home(props: IHomeProps) {
  const { pokemons } = props;

  return (
    <Layout title="Listado de pokemones">
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map(pok => (
            // <li key={pok.id}>{`#${pok.id} - ${pok.name} - ${pok.img}`}</li>
            <Grid key={pok.id} xs={6} sm={3} md={2} xl={1}>
              <Card isHoverable isPressable>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image
                    src={pok.img}
                    width='100%'
                    height='140px'
                  />
                </Card.Body>

                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize">{pok.name}</Text>
                    <Text>#{pok.id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resApi = await pokemonApi.get<PokemonResponse>('/pokemon?limit=151');

  const newPokemons: Result[] = resApi.data.results.map(pok => {
    const splitPokemons = pok.url.split('/');
    const idPokemon = splitPokemons[6];
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${idPokemon}.png`;

    return {
      id: idPokemon,
      img,
      name: pok.name,
      url: pok.url
    };
  });

  return {
    props: {
      pokemons: newPokemons
    }
  }
};
