import { createStore, combineReducers, applyMiddleware } from "redux"
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import createSagaMiddleware from "@redux-saga/core";
import { countWatcher } from "../saga/countSaga";
import { rootWatcher } from "../saga";
import userReducer from "./userReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware) )


sagaMiddleware.run(rootWatcher)



// сага: создаем миддлвейр, передаем его вторым параметром в стор,
// вызываем функцию ран, в которую передаем один глобальный вотчер, который наблюдает
// за всеми остальными вотчерами, которые следят за воркерами
// 
// чтобы воркер отработал вызываем экшен, за которым следит вотчер