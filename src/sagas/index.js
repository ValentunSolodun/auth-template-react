import {all} from 'redux-saga/effects';
import registerSend from "./userRegisterSaga";
import loginSend from "./userLoginSaga";
import homeSend from "./getHomeSaga";

export default function* rootSaga() {
  yield all([
    loginSend(),
    registerSend(),
    homeSend()
  ])
}