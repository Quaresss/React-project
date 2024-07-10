import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface obj {
  name: string;
  sortProperty: string;
}
export interface FilterState {
  categoryId: number;
  open: boolean;
  sort: obj;
}

const initialState: FilterState = {
  categoryId: 0,
  open: false,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },

    setSort(state, action: PayloadAction<obj>) {
      state.sort = action.payload;
    },

    setOpen(state) {
      state.open = !state.open;
    },

    setClose(state) {
      state.open = false;
    },
  },
});

export const { setCategoryId, setSort, setOpen, setClose } = filterSlice.actions;
export default filterSlice.reducer;
