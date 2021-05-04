import React from 'react';
import SideNav from './SideNav';
import AuthNav from './AuthNav';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <SideNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
