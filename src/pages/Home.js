import React from 'react'
import CharacterList from '../components/CharacterList'
import rickandmorty from '../images/rickandmorty.png'

//rrd
import { useNavigate } from 'react-router-dom'


//mui
import Button from '@mui/material/Button';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
        <div  style={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: '10px',
        }}>
        <img src={rickandmorty}  alt='rickandmorty' width='150px' />
        </div>
        <div>
        {/* bookmarks button */}
        <Button
          sx={{
            position: 'fixed',
            top: 10,
            right: 10,
            color: '#fff',
            backgroundColor: '#7E57C2',
            '&:hover': {
              backgroundColor: '#512DA8',
            },
          }}
          variant="contained"
          startIcon={<StarBorderPurple500Icon />}
          onClick={() => navigate('/bookmarks')}
        >
          Check Bookmarks!
        </Button>
        </div>
        <CharacterList/>
    </div>
  )
}

export default Home

