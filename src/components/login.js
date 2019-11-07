import React from 'react';
import {connect} from 'react-redux';
import {history} from '../helpers/history';
import {createSelector} from 'reselect';
import {loginAction} from '../actions/user';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core";
import cn from 'classnames'

let styles = makeStyles({
  containerForm: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40%'
  },
  formControl: {
    margin: '10px 0'
  },
  GrowOne: {
    flexGrow: 1,
    margin: "10px 5px"
  },
  ContainerBtnAuth: {
    display: 'flex'
  }
});

const Login = (props) => {

  let style = styles();
  let {user} = props;

  return (
    <Container className={style.containerForm}>
      <form className={style.form} onSubmit={props.login}>
        <FormControl className={style.formControl}>
          <InputLabel htmlFor="email_login">Email</InputLabel>
          <Input id="email_login" defaultValue={user.email}/>
        </FormControl>
        <FormControl className={style.formControl}>
          <InputLabel htmlFor="password_login">Password</InputLabel>
          <Input id="password_login"/>
        </FormControl>
        <div className={style.ContainerBtnAuth}>
          <Button className={cn(style.formControl, style.GrowOne)} variant="contained" color="primary" type={'submit'}>
            Submit
          </Button>
          <Button className={cn(style.formControl, style.GrowOne)} onClick={() => history.push('/register')} variant="contained">
            Register
          </Button>
        </div>
      </form>
    </Container>
  );
}


let userSelector = createSelector(
  state => state.user,
  user => user
);

const mapStateToProps = (state) => ({
  user: userSelector(state)
});

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(loginAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);