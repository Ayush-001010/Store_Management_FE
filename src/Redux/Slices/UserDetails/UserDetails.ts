import { createSlice } from "@reduxjs/toolkit";

const UserDetailsSlice = createSlice({
    name: "UserDetails",
    initialState: {
        isSignIn: false,
    },
    reducers: {}
});

export default UserDetailsSlice.reducer;