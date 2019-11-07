import React from 'react';
import {connect} from 'react-redux';
import {getHome} from "../../actions/home";

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

export default connect(null, dispatch => {
  dispatch(getHome())
  return {};
})(Home);