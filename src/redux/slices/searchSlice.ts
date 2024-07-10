import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  search: string;
  update: string;
}

const initialState: SearchState = {
  search: '',
  update: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setUpdate(state, action: PayloadAction<string>) {
      state.update = action.payload;
    },

    clearSearch(state) {
      state.search = '';
      state.update = '';
    },
  },
});

export const { setSearch, clearSearch, setUpdate } = searchSlice.actions;
export default searchSlice.reducer;
