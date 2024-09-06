import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

//create action
export const commercialrealestateother = createAsyncThunk(
  "commercialrealestateother",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    const response = await fetch(
      `${baseurl}/commercialrealestateother`,
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



export const commercialrealestateotherSlice = createSlice({
  name: "commercialrealestateother",
  initialState: {
    commercialrealestateotherData: [],
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
      .addCase(commercialrealestateother.pending, (state) => {
        state.loading = true;
      })
      .addCase(commercialrealestateother.fulfilled, (state, action) => {
        state.loading = false;
        state.commercialrealestateotherData = action.payload; // Assuming action.payload is an array
      })
      .addCase(commercialrealestateother.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
   
  },
});

export const { searchUser } = commercialrealestateotherSlice.actions;

export default commercialrealestateotherSlice.reducer;
