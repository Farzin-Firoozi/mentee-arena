import CharacterSearcher from '../components/CharacterSearcher';
import Table from '../components/Table';

export const ListPage = ({ characters, setCharacters, originalData }) => {
  return (
    <div>
      <div>
        <p className="text-2xl font-bold font-serif flex items-center justify-center m-10">
          The List of Rick and Morty Characters
        </p>
      </div>
      <CharacterSearcher {...{ characters, setCharacters, originalData }} />
      <Table {...{ characters, setCharacters }} />
    </div>
  );
};

export default ListPage;
