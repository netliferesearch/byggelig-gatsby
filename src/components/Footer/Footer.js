import React from 'react';
import ntnuLogo from '../../images/ntnu.svg';
import './Footer.scss';

export default () => (
  <footer className="footer">
    <div className="wrap-outer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 mt-lg-0 mt-2 mb-1">
            <div className="footer__contact">
              <img src={ntnuLogo} alt="NTNU Logo" />
              <p>Prosjekt Norge - BAE-programmet<br />
              c/o Institutt for maskintekikk og produksjon, NTNU<br />
              Høgskoleringen 1, 7034 Trondheim</p>
            </div>
          </div>
          <div className="col-lg-5 mt-lg-0 mt-2">
            <div className="footer__tagline">
              <a href="https://www.bygg21.no/rapporter-og-veiledere" className="link link--white">
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
                  href="mailto:post@bygg21.no"
                  className="link link--white link--slim"
                >
                  post@bygg21.no
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
              <p role="presentation">
                <a
                  className="link link--white link--slim"
                  href="/byggelig-i-lomma"
                >
                  Byggelig i lomma
                </a>
              </p>
              <p role="presentation">
                <a
                  className="link link--white link--slim"
                  href="/artikkel/api-med-innhold-fra-fasenormene"
                >
                  API for fasenormene
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
