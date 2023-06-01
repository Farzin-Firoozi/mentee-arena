export interface ICharacterInfo {
  id: number;
  image: string;
  name: string;
  bookmark: JSX.Element;
  species: string;
  status: string;
  type: string;
  url: string;
  created: string;
  episode: [];
  gender: string;
  bookmarked: {};
  onBookmarkChange: () => void;
}

export interface ICharacter
  extends Omit<ICharacterInfo, "type" | "episode" | "url"> {}
