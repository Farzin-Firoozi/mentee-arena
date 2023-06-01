import { configureStore } from '@reduxjs/toolkit'
import rickAndMortyReducer from '../features/rickAndMorty/rickAndMortySlice'

export const store = configureStore({
  reducer: {
    rickAndMorty: rickAndMortyReducer,
  },
})