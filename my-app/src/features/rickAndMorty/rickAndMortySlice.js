import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rickAndMorty: {
      fetchedData: [],
      loading: false,
      pageNumber: 1,
      search: "",
      bookmarkedCards: []
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
    setBookmarkedCards: (state, action) => {
      state.rickAndMorty.bookmarkedCards = action.payload;
    }
  },
})

export const {
  setFetchedData,
  setPageNumber,
  setSearch,
  setLoading,
  setBookmarkedCards
} = rickAndMortySlice.actions;

export default rickAndMortySlice.reducer;