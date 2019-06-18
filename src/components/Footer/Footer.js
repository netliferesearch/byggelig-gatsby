import React from 'react';
import ntnuLogo from '../../images/ntnu.svg';

import './Footer.scss';

export default () => (
  <footer className="footer">
    <div className="wrap-outer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 mt-lg-0 mt-2 mb-1">
            <img src={ntnuLogo} alt="NTNU Logo" />
          </div>
          <div className="col-lg-5 mt-lg-0 mt-2">
            <div className="footer__tagline">
              <a href="https://www.bygg21.no/" className="link link--white">
                Bygg21s
              </a>{' '}
              veiledning for effektive og bærekraftige byggeprosesser er
              kvalitetssikret av NTNU
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 mt-lg-0 mt-2">
            <div className="footer__contact">
              Lurer du på noe?
              <p role="presentation">
                <a
                  href="mailto:kontakt@byggelig.no"
                  className="link link--white link--slim"
                >
                  kontakt@byggelig.no
                </a>
              </p>
              <p role="presentation">
                <a
                  className="link link--white link--slim"
                  href="/artikkel/personvern-og-cookies"
                >
                  Personvern og cookies
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
