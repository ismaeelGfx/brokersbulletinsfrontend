import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const favorite_emails = createAsyncThunk(
    "favorite_emails",
    async (id, { rejectWithValue }) => {
      console.log("id fave", id);
      const response = await fetch(
        `${baseurl}/getfavorite_emails/${id}`,
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


export const favorite_emailsSlice = createSlice({
  name: "favorite_emails",
  initialState: {
    favorite_emails_data: [],
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
      .addCase(favorite_emails.pending, (state) => {
        state.loading = true;
      })
      .addCase(favorite_emails.fulfilled, (state, action) => {
        state.loading = false;
        state.favorite_emails_data = action.payload; // Assuming action.payload is an array
      })
      .addCase(favorite_emails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = favorite_emailsSlice.actions;

export default favorite_emailsSlice.reducer;
