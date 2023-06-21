import pokemonApi from "@/apis/pokemonApi";
import { PokemonDetail } from "@/interfaces/iPokemonDetail";

export const getPokemonByNameOrId = async (value?: string) => {
  const resApi = await pokemonApi.get<PokemonDetail>(`/pokemon/${value}`);

  const pokemon = {
    id: resApi.data.id,
    name: resApi.data.name,
    sprites: resApi.data.sprites
  }

  return {
    props: {
      pokemon
    }
  }
};