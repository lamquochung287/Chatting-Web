import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/login/loginSlice"
import registerReducer from "./features/register/registerSlice"
import chattingReducer from "./features/chatObject/objectSlice"

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        chatting: chattingReducer,
    },
});
