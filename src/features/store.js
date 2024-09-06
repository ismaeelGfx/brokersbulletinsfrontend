import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "./userDetailSlice";
import authReducer from "./user_authentication"
import getbrandsReducer from "./BrandService"
import residential_floridaReducer from "./ResidentialFlorida"
import commercial_floridaReducer from "./CommercialFlorida"
import commercial_newyorkReducer from "./CommercialNewyork"
import residential_newyorkReducer from "./ResidentialNewyork"
import favorite_emailsReducer from "./FavoriteEmails"
import follow_brandsReducer from "./FollowBrands"
import search_filterReducer from "./SearchFilter"
import  adminAuthReducer from "./AdminSignup"
import commercialrealestateotherReducer from "./CommercialRealEstateOther"
import residentialrealestateotherReducer from "./ResidentialRealEstateOther"

export const store = configureStore({
  reducer: {  
    userDetail: userDetailReducer,
    auth: authReducer,
    getbrands: getbrandsReducer,
    residential_florida: residential_floridaReducer ,
    commercial_florida: commercial_floridaReducer,
    commercial_newyork: commercial_newyorkReducer,
    residential_newyork: residential_newyorkReducer,
    favorite_emails: favorite_emailsReducer,
    follow_brands:follow_brandsReducer,
    search_filter:search_filterReducer,
    adminAuth:adminAuthReducer,
    commercialrealestateother:commercialrealestateotherReducer,
    residentialrealestateother:residentialrealestateotherReducer
  },
});
