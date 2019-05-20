import React from 'react';
import ntnuLogo from '../../images/ntnu.svg';

import './Footer.scss';

export default () => (
  <footer className="footer">
    <div className="wrap-outer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 mt-lg-0 mt-2">
            <img src={ntnuLogo} alt="NTNU Logo" />
          </div>
          <div className="col-lg-5 mt-lg-0 mt-2">
            Veiledningen for effektive og bærekraftige byggeprosesser er
            kvalitetssikret av NTNU
          </div>
          <div className="col-lg-3 offset-lg-1 mt-lg-0 mt-2">
            <div className="footer__contact">
              Lurer du på noe?
              <br />
              <a href="mailto:kontakt@byggelig.no" className="footer__link">
                kontakt@byggelig.no
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
