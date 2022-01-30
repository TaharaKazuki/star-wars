import styled from 'styled-components'
import Head from 'next/head'

export default function Characters({ characters }) {
  return (
    <>
      <Head>
        <title>Star Wars Characters | StarWars.com</title>
      </Head>
      <HomeScreenContainer>
        <h1>Starwars</h1>
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
