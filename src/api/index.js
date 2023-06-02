import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";
const api_url = (uri = "") => `${BASE_URL}${uri}`;

export const getPaginatCharacters = (data) => axios.get(api_url(data.address));
//export const getOneCharacter = (data) => axios.get(api_url(data.address));
export const getCharacterByName = (data) => axios.get(api_url(data.address));
