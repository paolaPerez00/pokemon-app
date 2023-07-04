import { Card, Image, Spacer, Text, useTheme } from "@nextui-org/react"
import NextLink from 'next/link'

export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray900.value
        }}
        >

            <NextLink href="/">
                <Card.Header>
                    <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                        alt="Icono de la aplicación"
                        width={70}
                        height={70}
                    >
                    </Image>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </Card.Header>
            </NextLink>
            <Spacer css={{ flex: 1 }}></Spacer>

            <NextLink href="/favorites">
                <Text color="white" css={{marginRight:'10px'}}>Favoritos</Text>
            </NextLink>
        </div>
    )
}


