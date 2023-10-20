import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// add all reducers here
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../services/storeUtility";
import counterReducer from "../pages/counter/store";
import booksReducer from "../pages/bookList/store";

const preloadedState = loadFromLocalStorage();
const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState,
});
store.subscribe(() => saveToLocalStorage({ auth: store.getState().auth }));

window.store = store;

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import { combineReducers } from "redux";
// import logger from "redux-logger";
// import storage from "redux-persist/lib/storage";

// // add all reducers here
// import counterReducer from "../pages/counter/store";

// const persistConfig = {
//   key: "counter",
//   storage,
// };

// const reducers = combineReducers({ counter: counterReducer });
// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(logger),
// });

// export default store;
