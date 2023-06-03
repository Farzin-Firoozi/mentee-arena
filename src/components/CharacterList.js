import React, { useState, useEffect } from 'react';

// mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Tooltip from '@mui/material/Tooltip';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookmarkedCharacters, setBookmarkedCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
        const data = await response.json();

        if (response.ok) {
          setCharacters(data.results);
        } else {
          setError(true);
          throw new Error('Failed to fetch characters. Please try again later.');
        }
      } catch (error) {
        console.error('Error occurred while fetching character information:', error);
        setCharacters([]);
        setError(true);
      }

      setLoading(false);
    };

    fetchCharacters();
  }, [searchTerm]);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const bookmarkHandler = (character) => {
    const updatedBookmarkedCharacters = [...bookmarkedCharacters, character];
    setBookmarkedCharacters(updatedBookmarkedCharacters);
    localStorage.setItem('bookmarkedCharacters', JSON.stringify(updatedBookmarkedCharacters));
  };

  const searchSubmitHandler= (event) => {
    event.preventDefault()
    setSearchTerm('')
  }

  return (
    <>
      <div>
        {/* searchbar */}
        <form onSubmit={searchSubmitHandler}>
        <InputBase
          value={searchTerm}
          variant="outlined"
          onChange={searchHandler}
          sx={{ mt: 5, ml: 1, flex: 1, backgroundColor: '#F5F5F5', borderRadius: 5, padding: '5px 10px' }}
          placeholder="Search Character"
          inputProps={{ 'aria-label': 'search Character' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        </form>
      </div>

      {/* character list */}
      {error && <h6>No matched character found.</h6>}
      {loading && <h6>Loading...</h6>}
      {!error && !loading && (
        <div>
          <h1 style={{ fontFamily: 'fantasy', color: '#7E57C2', textAlign: 'center' }}>Character List</h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {characters.map((character) => (
              <Card
                key={character.id}
                sx={{
                  maxWidth: 300,
                  backgroundColor: '#F5F5F5',
                  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <CardMedia component="img" height="400" image={character.image} alt={character.name} />
                <CardContent>
                  <Typography variant="h5" component="div" style={{ fontFamily: 'Arial', color: '#512DA8' }}>
                    {character.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Arial' }}>
                    Status: {character.status}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Arial' }}>
                    Species: {character.species}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Arial' }}>
                    Gender: {character.gender}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Arial' }}>
                    Last known location: {character.location.name}
                  </Typography>
                  <IconButton
                    aria-label="bookmark"
                    size="medium"
                    onClick={() => bookmarkHandler(character)}
                    sx={{ color: '#7E57C2' }}
                  >
                    <Tooltip title="Add to your bookmarks">
                      <BookmarkIcon />
                    </Tooltip>
                  </IconButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterList;
