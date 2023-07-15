import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import Cards from '../cards/Cards'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import '../characters/Characters.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const MarvelCharacters = async (e) => {
        setLoading(true)
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&&ts=1&apikey=e864c1e9c91fb15104e3de0c15264675&hash=18dc4badbcd585a569e68f9dcdb93ed6`)
        console.log(response.data.data.results);
        setCharacters(response.data.data.results)
      }catch (error) {
        console.log('Error:', error);
      } finally {
        setLoading(false)
      }
      }
    
    useEffect(() =>{

    },[search])
    
    return (
      <>
      <Container className='mt-3'>
        <div className='d-flex justify-content-center align-items-center'>
          <Form.Control type="text" placeholder="Search Characters" onChange={(e) => setSearch(e.target.value)} style={{ width: "50%" }} />
          <Button variant="outline-danger" onClick={() => MarvelCharacters()}>Search</Button>
        </div>
      </Container>
      <span className="d-flex justify-content-center align-items-center mt-3">{loading ? <span className="spinner"><img className='spinner-img' src='https://pngimg.com/uploads/deadpool/deadpool_PNG73.png' alt=''/></span> : loading}</span>
      <Cards characters={characters} />
      </>
    );
}


export default Characters