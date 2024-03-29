import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from 'next/link';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray900.value
    }}>


      <NextLink href='/' passHref>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            alt="imagen"
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
            height={70}
            width={70}
          />
          <Text color="black" h2>P</Text>
          <Text color="black" h3>ókemon</Text>
        </div>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favoritos' passHref>
        <Text color="black">Favoritos</Text>
      </NextLink>
    </div>
  );
};

export default Navbar;