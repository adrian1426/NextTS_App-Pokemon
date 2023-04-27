import { useRouter } from "next/router";

const PokemonDetail = () => {
  const router = useRouter();

  console.log(router.query)

  return (
    <div>
      Pokemon detail
    </div>
  );
};

export default PokemonDetail;