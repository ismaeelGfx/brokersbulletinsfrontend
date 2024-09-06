import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const commercial_newyork = createAsyncThunk(
  "commercial_newyork",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `${baseurl}/getallcommercialemailnewyork`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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



export const commercial_newyorkSlice = createSlice({
  name: "commercial_newyork",
  initialState: {
    commercial_newyorkBrands: [],
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
      .addCase(commercial_newyork.pending, (state) => {
        state.loading = true;
      })
      .addCase(commercial_newyork.fulfilled, (state, action) => {
        state.loading = false;
        state.commercial_newyorkBrands = action.payload; // Assuming action.payload is an array
      })
      .addCase(commercial_newyork.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = commercial_newyorkSlice.actions;

export default commercial_newyorkSlice.reducer;
