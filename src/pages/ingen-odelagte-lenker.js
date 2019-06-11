import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Ingen ødelagte lenker" />
    <div className="wrap-outer">
      <div className="container-fluid">
        <div className="row">
          <div className="col mt-4 mb-4">
            <h1 className="h2">
              🤖 Jeg fant ingen ødelagte lenker 🙌 🎉 Bra jobba 👌
              <br />- Byggelig Robot
            </h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
