import { configureStore } from '@reduxjs/toolkit';
import greetingReducer, { fetchMessageFromAPI } from './greeting_slice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

store.dispatch(fetchMessageFromAPI());

export default store;
