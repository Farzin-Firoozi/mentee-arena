import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rickAndMorty: {
      fetchedData: [],
      pageNumber: 1,
      search: ""
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
  },
})

export const {
  setFetchedData,
  setPageNumber,
  setSearch
} = rickAndMortySlice.actions;

export default rickAndMortySlice.reducer;