import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk(
  'items/fetchItemsStatus',
  async (params: Record<string, string>) => {
    const { category, searchItems, sortType } = params;
    const { data } = await axios.get<Item[]>(
      `https://847c80a9e47a2b52.mokky.dev/items?${category}&sortBy=${sortType}${searchItems}`,
    );
    return data as Item[];
  },
);

type Item = {
  id: number;
  title: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
};

export interface ItemsState {
  items: Item[];
  status: Status;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: ItemsState = {
  items: [],
  status: Status.LOADING,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});
export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
