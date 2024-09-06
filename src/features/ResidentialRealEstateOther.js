import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const residentialrealestateother = createAsyncThunk(
  "residentialrealestateother",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `${baseurl}/residentialrealestateother`,
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



export const residentialrealestateotherSlice = createSlice({
  name: "residentialrealestateother",
  initialState: {
    residentialrealestateotherData: [],
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
      .addCase(residentialrealestateother.pending, (state) => {
        state.loading = true;
      })
      .addCase(residentialrealestateother.fulfilled, (state, action) => {
        state.loading = false;
        state.residentialrealestateotherData = action.payload; // Assuming action.payload is an array
      })
      .addCase(residentialrealestateother.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = residentialrealestateotherSlice.actions;

export default residentialrealestateotherSlice.reducer;
