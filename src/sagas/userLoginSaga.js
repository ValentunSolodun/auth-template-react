import {takeEvery, put, call} from 'redux-saga/effects';
import {history} from '../helpers/history';
import cookie from 'react-cookies';


function* fetchingLogin({email, password}) {

  let objDispatch = {
    email: email,
    password: password
  }

  let fetchData = async () => {

    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objDispatch)
      });

      let data = await response.json();

      return {
        token: data.token,
        rows: data.rows,
        status: response.status,
      };

    } catch (e) {
      return false;
    }
  }

  const data = yield call(fetchData);

  if (data.status === 200) {
    cookie.save('token', data.token, {path: '/'});
    history.push('/');
    yield put({type: 'LOGIN_RESULT', payload: data.rows});
    yield put({type: 'SUCCESSFUL_USER', payload: data.rows});
  } else {
    alert('Error fetch login');
  }

}

function* loginSend() {
  yield takeEvery('LOGIN_SEND', fetchingLogin);
}

export default loginSend;