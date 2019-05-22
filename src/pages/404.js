import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Breadcrumbs from '../components/Breadcrumbs';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Siden finnes ikke" />
    <Breadcrumbs />
    <div class="wrap-outer">
      <div class="container-fluid">
        <div class="row">
          <div class="col mt-4 mb-4">
            <h1>Oida, denne siden finnes ikke...</h1>
            <p>
              Håper du ikke ble veldig skuffet. <br />
              <br />
              Ta en tur innom forsiden og se om du finner noe der.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
