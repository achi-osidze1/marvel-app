import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Info = () => {
    const {id} = useParams();
    const [characters, setCharacters] = useState([])

    const CharactersInfo = async (e) => {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e864c1e9c91fb15104e3de0c15264675&hash=18dc4badbcd585a569e68f9dcdb93ed6`)
        console.log(response.data.data.results);
        setCharacters(response.data.data.results)
      }

      useEffect(()=>{
        CharactersInfo()
      },[])

  return (
      <Container>
        {characters.map((character, index) => (
          <div key={index} className="card my-3 border-danger">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className="img-fluid rounded-start" alt=""/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{character.name}</h3>
                  <h6 className="card-text">{character.description}</h6>
                </div>
              </div>
            </div>
          </div>
         ))}
      </Container>
  )
}

export default Info