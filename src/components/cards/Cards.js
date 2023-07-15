import React from 'react'
import { Container, Card } from 'react-bootstrap'
import {useHistory} from "react-router-dom";
import "../cards/Cards.css"

const Cards = (props) => {
  const history = useHistory()
    return (
        <Container className='my-3' style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
            {props.characters.map((character, index) => {
              return <Card key={index} className="character-card" onClick={()=>history.push(`/${character?.id}`)}>
                <Card.Img variant="top" src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} />
                <Card.Body>
                  <Card.Text>{character?.name}</Card.Text>
                </Card.Body>
              </Card>;
            })}
        </Container>
      )
}

export default Cards