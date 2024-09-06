import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const search_filter = createAsyncThunk(
    "search_filter",
    async (id, { rejectWithValue }) => {
      console.log("id fave", id);
      const response = await fetch(
        `${baseurl}/search_filter/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );


export const search_filterSlice = createSlice({
  name: "search_filter",
  initialState: {
    search_filter_data: [],
    loading: false,
    error: null,
    brandsData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(search_filter.pending, (state) => {
        state.loading = true;
      })
      .addCase(search_filter.fulfilled, (state, action) => {
        state.loading = false;
        state.search_filter_data = action.payload; // Assuming action.payload is an array
      })
      .addCase(search_filter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = search_filterSlice.actions;

export default search_filterSlice.reducer;
