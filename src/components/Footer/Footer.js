import React from 'react';
import ntnuLogo from '../../images/ntnu.svg';

import './Footer.scss';

export default () => (
  <footer className="footer">
    <div className="wrap-outer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-md-0 mt-2">
            <img src={ntnuLogo} alt="NTNU Logo" />
          </div>
          <div className="col-md-5 mt-md-0 mt-2">
            Veiledningen for effektive og bærekraftige byggeprosesser er
            kvalitetssikret av NTNU
          </div>
          <div className="col-md-3 offset-md-1 mt-md-0 mt-2">
            Lurer du på noe?
            <br />
            <a href="mailto:kontakt@byggelig.no" className="footer__link">
              kontakt@byggelig.no
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
