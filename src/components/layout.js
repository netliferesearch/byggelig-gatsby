/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/main.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="wrap-outer">
      <div className="row">
        <div className="col-md-8">{children}</div>
      </div>
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
