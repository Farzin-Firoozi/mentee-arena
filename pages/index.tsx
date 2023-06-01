import Image from "next/image";
import { Inter } from "next/font/google";
import CharacterList from "@/components/CharacterList";
import Search from "@/components/Search";
import { Space } from "@/components/Space";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import Character from "@/components/Character";
import { ICharacterInfo } from "@/components/types/characterlist.interface";
import LayoutCharacter from "@/components/LayoutCharacter";
import { ShowBookmark, ShowfillBookmark } from "@/components/icons/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [query, setQuery] = useState<string>("");
  const [characters, setCharacters] = useState([]);
  const [IsSearched, setIsSearched] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        setCharacters(data.results);
        if (characters?.length) {
          setIsSearched(true);
        } else {
          setIsSearched(false);
        }

        console.log(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    FetchData();
  }, [query]);

  const bookmark: JSX.Element = (
    <div
      className="flex items-end w-full justify-end cursor-pointer"
      onClick={() => setShowBookmarks(!showBookmarks)}
    >
      {showBookmarks ? <ShowfillBookmark /> : <ShowBookmark />}
    </div>
  );

  return (
    <main
      className={` container mx-auto 2xl:max-w-screen-2xl flex flex-col min-h-screen   items-center justify-between   ${inter.className} bg-white `}
    >
      <Search
        query={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Space vertical={160} />

      {!IsSearched && <CharacterList />}

      <LayoutCharacter>
        {IsSearched &&
          characters.map((character: ICharacterInfo) => (
            <Character
              image={character.image}
              id={character?.id}
              name={character.name}
              // location={character.location}
              species={character.species}
              status={character.status}
              created={character.created}
              gender={character.gender}
              bookmark={
                <div
                  className="flex items-end w-full justify-end cursor-pointer"
                  onClick={() => setShowBookmarks(!showBookmarks)}
                >
                  {showBookmarks ? <ShowfillBookmark /> : <ShowBookmark />}
                </div>
              }
            />
          ))}
      </LayoutCharacter>
    </main>
  );
}
