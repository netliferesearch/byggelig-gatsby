import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.scss';

import ArrowCollapse from '../../icons/arrow_collapse.svg';
import CheckRound from '../../icons/check_round.svg';
import Check from '../../icons/check.svg';
import ArrowRound from '../../icons/arrow_round.svg';
import Arrow from '../../icons/arrow.svg';
import Bulletpoint from '../../icons/bulletpoint.svg';

const iconStyle = (deg, mirror) => ({
  transform: `${deg ? `rotate(${deg}deg)` : ''} ${mirror ? 'scale(-1, 1)' : ''}`
});

const iconClasses = size =>
  classNames({
    icon: true,
    'icon--small': size === 'small',
    'icon--normal': size === 'normal',
    'icon--medium': size === 'medium',
    'icon--big': size === 'big',
    'icon--huge': size === 'huge',
    'icon--giga': size === 'giga'
  });

const Icon = memo(({ type, rotate, mirror, size, src }) => (
  <div
    aria-hidden
    className={iconClasses(size)}
    style={iconStyle(rotate, mirror)}
  >
    {type === 'arrowcollapse' && <ArrowCollapse />}
    {type === 'checkround' && <CheckRound />}
    {type === 'check' && <Check />}
    {type === 'arrowround' && <ArrowRound />}
    {type === 'arrow' && <Arrow />}
    {type === 'bulletpoint' && <Bulletpoint />}
    {!type && src && <img src={src} alt="" />}
  </div>
));

Icon.propTypes = {
  type: PropTypes.oneOf([
    'arrowcollapse',
    'avvikling',
    'bearbeidingavvalgtkonsept',
    'beslutningplan',
    'brukogforvaltning',
    'checkround',
    'check',
    'detaljprosjektering',
    'oppstartplan',
    'overleveringogibruktakelse',
    'arrowround',
    'arrow',
    'planinitiativ',
    'produksjonogleveranser',
    'programogkonseptutvikling',
    'bulletpoint',
    'reguleringsplan',
    'strategiskdefinisjon',
    'toppen'
  ]),
  src: PropTypes.string,
  rotate: PropTypes.number,
  mirror: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'big', 'huge', 'giga'])
};

Icon.defaultProps = {
  size: 'small'
};

export default Icon;
