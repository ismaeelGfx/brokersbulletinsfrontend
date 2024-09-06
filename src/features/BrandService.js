import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const getbrands = createAsyncThunk(
  "getbrands",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `${baseurl}/getallbrands`,
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



export const getbrandSlice = createSlice({
  name: "getbrands",
  initialState: {
    brands: [],
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
      .addCase(getbrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getbrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload; // Assuming action.payload is an array
      })
      .addCase(getbrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = getbrandSlice.actions;

export default getbrandSlice.reducer;
