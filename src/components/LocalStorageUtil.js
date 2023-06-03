export const getBookmarkedCharactersFromLocalStorage = () => {
    const bookmarkedCharacters = JSON.parse(localStorage.getItem('bookmarkedCharacters')) || [];
    return bookmarkedCharacters;
  };
  
  export const updateBookmarkedCharactersInLocalStorage = (bookmarkedCharacters) => {
    localStorage.setItem('bookmarkedCharacters', JSON.stringify(bookmarkedCharacters));
  };
  