'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions';

const Header = ({ dispatch }) => (
  <div style={styles.container}>
    <div style={styles.item}>Home</div>
    <div style={styles.item}
         onClick={() => dispatch(reset())}>Reset</div>
    <div style={styles.item}
         onClick={() => window.location = 'https://github.com/lukefanning/lifeworks'}>View Source</div>
  </div>
)

Header.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const styles = {
  container: {
    height: 50,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: '1.5rem'
  },
  item: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    cursor: 'pointer'
  }
}

export default connect()(Header)
