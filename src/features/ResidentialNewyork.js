import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const residential_newyork = createAsyncThunk(
  "residential_newyork",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `${baseurl}/getallresidentialemailnewyork`,
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



export const residential_newyorkSlice = createSlice({
  name: "residential_newyork",
  initialState: {
    Residential_NewYork_brands: [],
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
      .addCase(residential_newyork.pending, (state) => {
        state.loading = true;
      })
      .addCase(residential_newyork.fulfilled, (state, action) => {
        state.loading = false;
        state.Residential_NewYork_brands = action.payload; // Assuming action.payload is an array
      })
      .addCase(residential_newyork.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = residential_newyorkSlice.actions;

export default residential_newyorkSlice.reducer;
