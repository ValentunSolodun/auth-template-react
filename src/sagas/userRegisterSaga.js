import {takeEvery, put, call} from 'redux-saga/effects';
import {history} from '../helpers/history'

function* fetchingRegister({name, email, password}) {
  let objDispatch = {
    name: name,
    email: email,
    password: password
  }

  // console.log(objDispatch);

  let fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objDispatch)
      });
      let status = response.status;
      return status;
    } catch (e) {
      // history.push('/login');
      return false;
    }
  }

  const data = yield call(fetchData);
  if (data === 200) {
    history.push('/login');
    yield put({type: 'REGISTER_RESULT', payload: data})
  } else {
    yield put({type: 'REGISTER_RESULT', payload: data})
  }
}


function* registerSend() {
  yield takeEvery('REGISTER_SEND', fetchingRegister);
}

export default registerSend;