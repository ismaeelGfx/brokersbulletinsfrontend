import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const residential_florida = createAsyncThunk(
  "residential_florida",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `${baseurl}/getallresidentialemailflorida`,
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



export const residential_floridaSlice = createSlice({
  name: "residential_florida",
  initialState: {
    Residential_Florida_brands: [],
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
      .addCase(residential_florida.pending, (state) => {
        state.loading = true;
      })
      .addCase(residential_florida.fulfilled, (state, action) => {
        state.loading = false;
        state.Residential_Florida_brands = action.payload; // Assuming action.payload is an array
      })
      .addCase(residential_florida.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = residential_floridaSlice.actions;

export default residential_floridaSlice.reducer;
