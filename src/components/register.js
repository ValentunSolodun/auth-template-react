import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {registerAction} from '../actions/user';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import cn from "classnames";
import {history} from "../helpers/history";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";

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

const Register = (props) => {

  let style = styles();

  return (
    <Container className={style.containerForm}>
      <form className={style.form} onSubmit={props.registration}>
        <FormControl className={style.formControl}>
          <InputLabel htmlFor="name_register">Name</InputLabel>
          <Input id="name_register"/>
        </FormControl>
        <FormControl className={style.formControl}>
          <InputLabel htmlFor="email_register">Email</InputLabel>
          <Input id="email_register"/>
        </FormControl>
        <FormControl className={style.formControl}>
          <InputLabel htmlFor="password_register">Password</InputLabel>
          <Input id="password_register"/>
        </FormControl>
        <div className={style.ContainerBtnAuth}>
          <Button className={cn(style.formControl, style.GrowOne)} variant="contained" color="primary" type={'submit'}>
            Submit
          </Button>
          <Button className={cn(style.formControl, style.GrowOne)} onClick={() => history.push('/login')} variant="contained">
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};

let userSelector = createSelector(
  state => state.user,
  user => user
);

const mapStateToProps = (state) => ({
  user: userSelector(state)
});

const mapDispatchToProps = dispatch => ({
  registration: e => dispatch(registerAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);