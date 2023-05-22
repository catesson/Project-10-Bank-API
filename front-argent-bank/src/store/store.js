import {
  configureStore,
  createAction,
  createSlice,
} from "@reduxjs/toolkit";

//Save Store
const savedState = JSON.parse(localStorage.getItem("state"));

//Slice (action + reducer)
const editSlice = createSlice({
  // le nom du slice
  name: "editor",
  // le state initial
  initialState: savedState ? savedState.edit : false,
  // reducers permet de définir les actions et le reducer
  reducers: {
    // l'action edit ('edit')
    edit: (state) => {
      return true;
    },
    // l'action cancelEdit ('cancelEdit')
    cancelEdit: (state) => {
      return false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(disconnected, (state) => {
      return false; // Réinitialise à la valeur initiale
    });
  },
});

const tokenSlice = createSlice({
  name: "userToken",
  initialState: savedState ? savedState.token : null,
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(disconnected, (state) => {
      return null; // Réinitialise à la valeur initiale
    });
  },
});

const connectSlice = createSlice({
  name: "connector",
  initialState: savedState ? savedState.connected : false,
  reducers: {
    connect: (state) => {
      return true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(disconnected, (state) => {
      return false; // Réinitialise à la valeur initiale
    });
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: savedState
    ? savedState.user
    : {
        id: null,
        email: null,
        firstName: null,
        lastName: null,
        createDate: null,
        updateDate: null,
      },
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(disconnected, (state) => {
      return {
        id: null,
        email: null,
        firstName: null,
        lastName: null,
        createDate: null,
        updateDate: null,
      }; // Réinitialise à la valeur initiale
    });
  },
});

export const { edit, cancelEdit } = editSlice.actions;
export const { setToken } = tokenSlice.actions;
export const { connect } = connectSlice.actions;
export const { setUser} = userSlice.actions;

//action
export const disconnected = createAction("disconnect");


export const store = configureStore({
  reducer: {
    connected: connectSlice.reducer,
    edit: editSlice.reducer,
    token: tokenSlice.reducer,
    user: userSlice.reducer,
  },
});


store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});
