import { Layout } from "@/layouts";
import { Button } from "@nextui-org/react";
import { GetStaticProps } from "next";
import pokemonApi from "@/apis/pokemonApi";

export default function Home(props) {

  console.log('props: ', props);

  return (
    <Layout title="Listado de pokemones">
      <Button color='gradient'>mi botón</Button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const resApi = await pokemonApi.get('/pokemon?limit=151');

  return {
    props: {
      pokemons: resApi.data.results
    }
  }
};
