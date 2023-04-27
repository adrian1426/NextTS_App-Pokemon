import { Layout } from "@/layouts";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface Props {
  id: string;
  name: string;
};

const PokemonDetailPage = (props: Props) => {
  const { id, name } = props;
  const router = useRouter();

  console.log(router.query)

  return (
    <Layout title="Algún pokemon" >
      <h1>{id} - {name}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [{
      params: {
        id: '1'
      }
    }],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const resApi = await pokemonApi.get<PokemonResponse>('/pokemon?limit=151');

  return {
    props: {
      id: 1,
      name: 'Bulbazor'
    }
  }
};

export default PokemonDetailPage;