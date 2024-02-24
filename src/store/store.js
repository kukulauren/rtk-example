import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slice/counter.slice'

export const store=configureStore({
  reducer:{
    counter:counterSlice
  }
})