import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const follow_brands = createAsyncThunk(
    "follow_brands",
    async (id, { rejectWithValue }) => {
      console.log("id fave", id);
      const response = await fetch(
        `${baseurl}/getfollowbrands/${id}`,
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


export const follow_brandsSlice = createSlice({
  name: "follow_brands",
  initialState: {
    follow_brands_data: [],
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
      .addCase(follow_brands.pending, (state) => {
        state.loading = true;
      })
      .addCase(follow_brands.fulfilled, (state, action) => {
        state.loading = false;
        state.follow_brands_data = action.payload; // Assuming action.payload is an array
      })
      .addCase(follow_brands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = follow_brandsSlice.actions;

export default follow_brandsSlice.reducer;
