import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const commercial_florida = createAsyncThunk(
  "commercial_florida",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `${baseurl}/getallcommercialemailflorida`,
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



export const commercial_floridaSlice = createSlice({
  name: "commercial_florida",
  initialState: {
    commercial_floridaBrands: [],
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
      .addCase(commercial_florida.pending, (state) => {
        state.loading = true;
      })
      .addCase(commercial_florida.fulfilled, (state, action) => {
        state.loading = false;
        state.commercial_floridaBrands = action.payload; // Assuming action.payload is an array
      })
      .addCase(commercial_florida.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = commercial_floridaSlice.actions;

export default commercial_floridaSlice.reducer;
