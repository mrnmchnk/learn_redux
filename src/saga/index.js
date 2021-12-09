import { all } from "redux-saga/effects";
import { countWatcher } from "./countSaga";
import { userWatcher } from "./userSaga";

// функция all это глобальный вотчер, следящий за другими вотчерами
export function* rootWatcher() {
  yield all([userWatcher(), countWatcher()])
}