import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Siden finnes ikke" />
    <div class="wrap-outer">
      <div class="container-fluid">
        <div class="row">
          <div class="col mt-4 mb-4">
            <h1>Denne siden finnes ikke...</h1>
            <p>
              Siden ble ikke prosjektert riktig og er derfor ikke bygget.
              <br />
              <br />
              Gå til <a href="/">forsiden</a> og se om du kan finne tips til
              byggeprosessen din der.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
