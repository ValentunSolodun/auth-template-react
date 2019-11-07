let initialState = {
  name: '',
  email: '',
  result: ''
};

const user = (state = initialState, action) => {

  switch (action.type) {
    case 'REGISTER_RESULT':
      return {...state, result: action.payload}
    case 'LOGIN_RESULT':
      return {...state}
    case 'SUCCESSFUL_USER':
      let stateUser = {...state};
      stateUser.id = action.payload.id;
      stateUser.name = action.payload.name;
      stateUser.email = action.payload.email;
      stateUser.result = 'Signed in';
      return {...stateUser}
    case 'LOGOUT':
      return initialState
    default:
      return state;
  }

}

export default user;