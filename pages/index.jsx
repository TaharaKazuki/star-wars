import styled from 'styled-components'
import Head from 'next/head'
import { useState } from 'react'

export default function Characters({ characters }) {
  const [value, setValue] = useState(12)

  return (
    <>
      <Head>
        <title>Star Wars Characters | StarWars.com</title>
      </Head>
      <HomeScreenContainer>
        <StarfieldLeft />
        <CharactersContainer>
          {characters
            .filter((character) => character.id !== 28 && character.id !== 77)
            .map(
              (character, index) =>
                index < value && (
                  <Character character={character} key={character.id} />
                )
            )}
        </CharactersContainer>
        <StarfieldRight />
      </HomeScreenContainer>
    </>
  )
}

export async function getStaticProps(context) {
  const characters = await fetch(
    'https://akabab.github.io/starwars-api/api/all.json'
  ).then((res) => res.json())

  return {
    props: {
      characters,
    },
  }
}

const HomeScreenContainer = styled.div``
const StarfieldLeft = styled.div``
const CharactersContainer = styled.div``
const StarfieldRight = styled.div``
