import { createSlice } from "@reduxjs/toolkit";
import UserDetailsType from "../../../Types/Redux/UserDetailsType";


const initialValue : UserDetailsType = {
    ID: 0,
    userName: "Ron Weasley",
    userEmail: "ronweasley@gmail.com",
    userRole: "shopowner",
    userProfileImage:"User_Profile_Images/anime-style-portrait-young-student-attending-school.jpg",
    isActive: true,
    createdAt: new Date("2023-01-01T10:00:00Z"),
    lastLogInTime: new Date("2023-10-01T15:30:00Z"),
    userAbout: "Just a regular wizard trying to make his way in the world.",
    userGender: "male",
    isSignIn: true,
    OrganizationID: 1
}

const UserDetailsSlice = createSlice({
    name: "UserDetails",
    initialState: initialValue,
    reducers: {}
});

export default UserDetailsSlice.reducer;