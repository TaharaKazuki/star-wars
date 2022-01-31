import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Character = ({ character }) => {
  return (
    <CharacterContainer>
      <Link href={`{/id/${character.id}.json}`}>
        <a>
          <img src={character.image} alt={character.name} />
        </a>
      </Link>
    </CharacterContainer>
  )
}

export default Character

const CharacterContainer = styled.div`
  border-radius: 6px;
  width: 266px;
  background-color: #282727;
`
