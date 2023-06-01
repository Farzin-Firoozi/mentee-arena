import { useState } from 'react';

import Card from './components/Card/Card';
import useCharachters from './hooks/useCharachters';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [search, setSearch] = useState('')
  const [showBookmarks, setShowBookmarks] = useState(false)

  const { lastItemRef, page } = useInfiniteScroll()

  const { characters } = useCharachters(page)

  const { getCards } = useLocalStorage()

  let showingCharacters;
  if (showBookmarks) {
    showingCharacters = getCards().filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }
  else {
    showingCharacters = characters.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  }

  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto', minHeight: '100%', padding: '2rem 0' }}>
      <div style={{ textAlign: 'center' }}>
        <input onChange={e => setSearch(e.target.value)}
          placeholder='Search Your character Name'
          style={{ padding: '1rem 2rem', margin: '2rem 0 4rem 0', borderRadius: '8px', fontSize: 'larger' }}
          id='search' type="text" />
        <button onClick={() => setShowBookmarks(!showBookmarks)}
          style={{ padding: '0.5rem 1rem', marginTop: '1rem', marginLeft: '1rem' }}>{showBookmarks ? "Hide" : 'Show'} Bookmarks</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', justifyItems: 'center' }}>
        {showingCharacters.length === 0 ? <h1 style={{ gridColumn: 'span 3' }}>"There is Nothing to show"</h1> : null}
        {showingCharacters.map(character => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
          />
        )
        )}
      </div>
      <div ref={lastItemRef}></div>
    </div>
  );
}

export default App;
