import { legacy_createStore as createStore, combineReducers, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk , { ThunkAction, ThunkDispatch}from "redux-thunk";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import moviesReducer from "./movie/reducer";
import detailMovieReducer from "./detailMovie/reducer";

const rootReducer = combineReducers({
    moviesReducer,
    detailMovieReducer
})

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

/* Types */
export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

export default store;