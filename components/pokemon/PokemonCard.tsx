import { Result } from "@/interfaces/pokemonInterface";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: Result
}

const PokemonCard = (props: Props) => {
  const { pokemon } = props;
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        onClick={onClick}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            width='100%'
            height='140px'
          />
        </Card.Body>

        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;