import pokemonApi from "@/apis/pokemonApi";
import { PokemonDetail } from "@/interfaces/iPokemonDetail";

export const getPokemonByNameOrId = async (value?: string) => {
  try {
    const resApi = await pokemonApi.get<PokemonDetail>(`/pokemon/${value}`);

    const pokemon = {
      id: resApi.data.id,
      name: resApi.data.name,
      sprites: resApi.data.sprites
    }

    return {
      props: {
        pokemon
      },
      revalidate: 86400 //1 dia
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
};