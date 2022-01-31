import styled from 'styled-components'
import Head from 'next/head'

export default function Characters({ characters }) {
  console.info('cara', characters)
  return (
    <>
      <Head>
        <title>Star Wars Characters | StarWars.com</title>
      </Head>
      <HomeScreenContainer>
        <StarfieldLeft />
        <CharactersContainer></CharactersContainer>
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
