import {configureStore, createStore} from '@reduxjs/toolkit';
import {counterReducer} from '../reducer/subReducer';

export const store = createStore(counterReducer);
