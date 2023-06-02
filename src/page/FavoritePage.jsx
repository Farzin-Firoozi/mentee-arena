import FavoriteTable from '../components/FavoriteTable';

export const FavoritePage = ({ characters }) => {
  return (
    <div>
      <div>
        <p className="text-2xl font-bold font-serif flex items-center justify-center m-10">
          Bookmarked Characters
        </p>
      </div>
      <FavoriteTable characters={characters} />;
    </div>
  );
};

export default FavoritePage;
