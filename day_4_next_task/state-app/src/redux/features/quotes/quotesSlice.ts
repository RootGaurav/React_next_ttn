import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    const data = await res.json();
    return data.quotes; // array of quotes
  }
);

type Quote = {
  id: number;
  quote: string;
  author: string;
};

type QuotesState = {
  data: Quote[];
  loading: boolean;
  error: string | null;
};

const initialState: QuotesState = {
  data: [],
  loading: false,
  error: null,
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch quotes";
      });
  },
});

export default quotesSlice.reducer;
