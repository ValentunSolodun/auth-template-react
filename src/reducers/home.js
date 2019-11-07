let initialState = {};

const home = (state = initialState, action) => {

  switch (action.type) {
    case 'SEND_GET_HOME':
      return {...state}
    case 'RESULT_GET_HOME':
      return {...state, tokenValid: true}
    default:
      return state;
  }

}

export default home;