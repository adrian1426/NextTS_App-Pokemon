import { Layout } from "@/layouts";
import { Button } from "@nextui-org/react";
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
      <Button color='gradient'>mi botón</Button>
      <hr />

      <ul>
        {
          pokemons.map(pok => (
            <li key={pok.id}>{`#${pok.id} - ${pok.name} - ${pok.img}`}</li>
          ))
        }
      </ul>
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
