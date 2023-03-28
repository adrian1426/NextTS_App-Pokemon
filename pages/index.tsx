import { Layout } from "@/layouts";
import { Button } from "@nextui-org/react";
import { GetStaticProps } from "next";

export default function Home(props) {

  console.log('props: ', props);

  return (
    <Layout title="Listado de pokemones">
      <Button color='gradient'>mi botón</Button>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('en funcion staticpropps')

  return {
    props: {

    }
  }
};
