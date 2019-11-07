import {takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import cookie from 'react-cookies';
import resetAuth from '../helpers/resetAuth';

function* fetchingGetHome() {
  const getHome = async () => {
    try {
      let response = await axios.get('http://localhost:3001/custom', {headers: {token: cookie.load('token')}});
      return response.status;
    } catch (e) {
      return false;
    }
  }

  let data = yield call(getHome);

  if(data) {
    yield put({type: "RESULT_GET_HOME"})
  }else {
    resetAuth();
  }

}

function* homeSend() {
  yield takeEvery("SEND_GET_HOME", fetchingGetHome)
}
export default homeSend;