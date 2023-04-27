import pokemonApi from "@/apis/pokemonApi";
import { PokemonDetail } from "@/interfaces/iPokemonDetail";
import { Layout } from "@/layouts";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  pokemon: PokemonDetail
};

const PokemonDetailPage = (props: Props) => {
  const { pokemon } = props;

  return (
    <Layout title="Algún pokemon" >
      <h1>{pokemon.name}</h1>
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