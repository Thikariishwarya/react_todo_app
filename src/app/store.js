//create redux
import todoreducer from "../features/todo/todoSlice"
import {configureStore } from '@reduxjs/toolkit';
export const store=configureStore({
    reducer:todoreducer,
});