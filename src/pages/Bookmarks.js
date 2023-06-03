import React, {useState} from 'react';
import { getBookmarkedCharactersFromLocalStorage, updateBookmarkedCharactersInLocalStorage } from '../components/LocalStorageUtil';

//rrd
import { useNavigate } from 'react-router-dom';

//mui
import IconButton from '@mui/material/IconButton';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import Button from '@mui/material/Button';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Bookmarks = () => {

  const [bookmarkedCharacters, setBookmarkedCharacters] = useState(getBookmarkedCharactersFromLocalStorage());


  const removeBookmarkHandler = (character) => {
    const updatedBookmarkedCharacters = bookmarkedCharacters.filter((bookmark) => bookmark.id !== character.id);
    updateBookmarkedCharactersInLocalStorage(updatedBookmarkedCharacters);
    setBookmarkedCharacters(updatedBookmarkedCharacters);

  };

  const navigate = useNavigate()

  return (
    <div>
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
    variant="outlined" 
    startIcon={<RoofingRoundedIcon/>} 
    onClick={()=>{navigate('/')}}> Back HOME </Button>
      <h1 style={{ fontFamily: 'fantasy', color: '#7E57C2', textAlign: 'center' }}>Bookmarked Characters</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {bookmarkedCharacters.map((character) => (
          <Card key={character.id} sx={{ maxWidth: 300 }}>
            <CardMedia component="img" height="400" image={character.image} alt={character.name} />
            <CardContent>
              <Typography variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {character.status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: {character.species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender: {character.gender}
              </Typography>
              <IconButton aria-label="remove bookmark" size="medium" onClick={() => removeBookmarkHandler(character)}>
                <BookmarkRemoveIcon fontSize="large" />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;