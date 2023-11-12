import { configureStore } from '@reduxjs/toolkit';
import { API } from './api';
import { filterSlice } from './filter';

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        [API.reducerPath]: API.reducer,
    },

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        API.middleware,
    ],
});