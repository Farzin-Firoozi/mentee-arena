
import BaseTable from "./BaseTable";
import CustomTableRow from "./CustomTableRow";

const CharacterPagination = ({ characters, count }) => {
  
  const headers = ["image", "name", "status", "description", "bookmark"];
  return (
    characters.length && (
      <BaseTable
        count={count}
        rows={characters}
        headers={headers}
      >
        {characters.map((row) => (
          <CustomTableRow
            row={row}
            key={row?.id}
           
          />
        ))}
      </BaseTable>
    )
  );
};

export default CharacterPagination;
