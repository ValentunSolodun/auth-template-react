import {all} from 'redux-saga/effects';
import registerSend from "./userRegisterSaga";
import loginSend from "./userLoginSaga";

export default function* rootSaga() {
  yield all([
    loginSend(),
    registerSend()
  ])
}