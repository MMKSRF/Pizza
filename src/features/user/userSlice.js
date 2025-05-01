/*

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const getAddress = (state) => state.user.address;
export const { updateName } = userSlice.actions;
export default userSlice.reducer;

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function _fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}


 */

import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  username:'',

}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.username = action.payload;
    }
  }
})

// console.log("this is action",userSlice.actions);
// console.log("this is the reduser " ,userSlice.reducer );
export const {updateName} = userSlice.actions; // use to change things like to change the username using dispach
export default userSlice.reducer; // reducer is used to diplay things that are in the place like the userName



















