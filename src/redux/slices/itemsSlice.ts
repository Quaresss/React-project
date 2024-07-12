import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchitems = createAsyncThunk(
  'items/fetchitemsStatus',
  async (params: Record<string, string>) => {
    const { category, searchitems, sortType } = params;
    const { data } = await axios.get<item[]>(
      `https://847c80a9e47a2b52.mokky.dev/items?${category}&sortBy=${sortType}${searchitems}`,
    );
    return data as item[];
  },
);

type item = {
  id: number;
  title: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
};

export interface itemsState {
  items: item[];
  status: Status;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: itemsState = {
  items: [],
  status: Status.LOADING,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setitems(state, action: PayloadAction<item[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchitems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchitems.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchitems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});
export const { setitems } = itemsSlice.actions;
export default itemsSlice.reducer;
