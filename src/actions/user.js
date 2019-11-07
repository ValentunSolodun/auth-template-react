export const registerAction = (e) => {
  e.preventDefault();
  return {
    type: 'REGISTER_SEND',
    name: e.target.name_register.value,
    email: e.target.email_register.value,
    password: e.target.password_register.value
  }
}

export const loginAction = (e) => {
  e.preventDefault();
  return {
    type: 'LOGIN_SEND',
    email: e.target.email_login.value,
    password: e.target.password_login.value
  }
}