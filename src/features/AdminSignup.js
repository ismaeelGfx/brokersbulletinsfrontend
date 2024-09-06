import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";

export const adminSignup = createAsyncThunk(
  "admin/auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/admin-signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const adminLogin = createAsyncThunk(
  "admin/auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/admin-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      localStorage.setItem("admin", JSON.stringify(data.adminRecord));
      
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    admin: localStorage.getItem("admin")
      ? JSON.parse(localStorage.getItem("admin"))
      : null,
    loading: false,
    error: null,
  },
  reducers: {
    adminLogout: (state) => {
      state.admin = null;
      localStorage.removeItem("admin");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminSignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(adminSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});



export const { adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
