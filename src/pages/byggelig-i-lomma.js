import React from 'react';
import '../styles/main.scss';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';
import phoneImg from '../images/phone.svg';
import downloadImg from '../images/download.svg';
import plusImg from '../images/plus.svg';
import menuImg from '../images/menu.svg';

const DownloadApp = () => (
  <>
    <SEO title="Last ned Byggelig app" />
      <div className="pocket-app">
        <main className="wrap-outer">
          <div className="container-fluid">
            <div className="row">
              <div className="col mt-4 mb-4">
                <Link to="/">
                  <img className="pocket-app__logo" src={logo} alt="byggelig" />
                </Link>
                <h1>Vil du ha <span className="pocket-app__text--mint">Byggelig</span> i lomma? 
                  <br /> Slik gjør du det:
                </h1>
                <div className="pocket-app__step">
                  <div className="pocket-app__step-nr">
                    <img className="pocket-app__img pocket-app__img1" src={phoneImg} alt="" />
                    <div className="pocket-app__circle pocket-app__circle--yellow"></div>
                  </div>
                  <p className="pocket-app__text">
                    Har du <span className="pocket-app__text--yellow">Android med Google Chrome</span>-nettleser?
                    <br />
                    Åpne nettleseren og gå til byggelig.no
                  </p>
                  <p className="pocket-app__text">
                      Eller har du <span className="pocket-app__text--yellow">iPhone med Safari</span>-nettleser?
                    <br />
                    Åpne nettleseren og gå til byggelig.no
                  </p>
                </div>
                <div className="pocket-app__step">
                  <div className="pocket-app__circle pocket-app__circle--minty pocket-app__step-nr"></div>
                  <div className="pocket-app__step-nr">
                    <img className="pocket-app__img pocket-app__img2" src={downloadImg} alt="" />
                    <p className="pocket-app__text">
                      <span className="pocket-app__text--yellow">iPhone:</span>
                      <br />
                      Klikk på &laquo;dele&raquo;-ikonet
                    </p>
                  </div>
                  <div className="pocket-app__step-nr">
                    <p className="pocket-app__text">
                      <span className="pocket-app__text--yellow">Android:</span>
                      <br />
                      Klikk på Meny
                    </p>
                    <img className="pocket-app__img pocket-app__img4" src={menuImg} alt="" />
                  </div>
                </div>
                <div className="pocket-app__step">
                  <div className="pocket-app__step-nr">
                    <div className="pocket-app__circle pocket-app__circle--greywhite"></div>
                    <img className="pocket-app__img pocket-app__img3" src={plusImg} alt="" />
                  </div>
                  <p className="pocket-app__text">
                    Klikk på &laquo;Legg til på Hjem-skjerm&raquo;,
                    <br />
                    navngi appen og klikk &laquo;Legg til&raquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  </>
);

export default DownloadApp;
