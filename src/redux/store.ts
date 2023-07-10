// Store state globalizely
import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/RegisterForm";
import communityReducer from "./slices/Community";
import CreatePollReducer from "./slices/CreatePoll";
import otpReducer from "./slices/Otp";
import authReducer from "./slices/Auth";

const store = configureStore({
  reducer: {
    register: registerReducer,
    createCommunity: communityReducer,
    createPoll: CreatePollReducer,
    otp: otpReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
