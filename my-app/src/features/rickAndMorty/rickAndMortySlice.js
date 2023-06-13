import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rickAndMorty: {
      fetchedData: [],
      loading: false,
      pageNumber: 1,
      search: "",
      status: "",
      gender: "",
      species: ""
    }
  }

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    setFetchedData: (state, action) => {
      state.rickAndMorty.fetchedData = action.payload;
    },
    setPageNumber: (state, action) => {
      state.rickAndMorty.pageNumber = action.payload;
    },
    setSearch: (state, action) => {
      state.rickAndMorty.search = action.payload;
    },
    setLoading: (state, action) => {
      state.rickAndMorty.loading = action.payload;
    },
    setStatus: (state, action) => {
      state.rickAndMorty.status = action.payload;
    },
    setGender: (state, action) => {
      state.rickAndMorty.gender = action.payload;
    },
    setSpecies: (state, action) => {
      state.rickAndMorty.species = action.payload;
    }
  },
})

export const {
  setFetchedData,
  setPageNumber,
  setSearch,
  setLoading,
  setStatus,
  setGender,
  setSpecies
} = rickAndMortySlice.actions;

export default rickAndMortySlice.reducer;