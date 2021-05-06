import React from 'react';
import SideNav from './SideNav';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = ({ isAuthenticated }) => {
  return (
    <Navbar bg="info" variant="dark" className={s.AppBar}>
      <SideNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
