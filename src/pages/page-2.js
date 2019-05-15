import React from 'react';

import LinkBlock from '../components/LinkBlock';
import LinkEntry from '../components/LinkEntry';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 200000</p>
    <div className="row">
      <div className="col-md-3">
        <LinkEntry to="/" icon="Some icon">
          1: Planinitiativ
        </LinkEntry>
      </div>
      <div className="col-md-3">
        <LinkEntry to="/" icon="Some icon">
          2: Oppstart plan
        </LinkEntry>
      </div>
      <div className="col-md-3">
        <LinkEntry to="/" icon="Some icon">
          3: Reguleringsplan
        </LinkEntry>
      </div>
      <div className="col-md-3">
        <LinkEntry to="/" icon="Some icon">
          4: Beslutning plan
        </LinkEntry>
      </div>
    </div>
    <br />
    <br />
    <LinkBlock to="/">Go back to the homepage</LinkBlock>
    <br />
    <br />
    <br />
    <br />
  </Layout>
);

export default SecondPage;
