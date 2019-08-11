import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/* Material UI Components */
import Container from '@material-ui/core/Container';

/* Cpmponents */
import Header from '@components/Header';

const Page = ({ children }) => (
  <Fragment>
    <Header />
    <Container>
      {children}
    </Container>
  </Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
