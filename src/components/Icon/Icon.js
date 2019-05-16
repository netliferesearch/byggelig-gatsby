import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './Icon.scss';

import ArrowCollapse from '../../icons/arrow_collapse.svg';
import Avvikling from '../../icons/avvikling.svg';
import Bearbeidingavvalgtkonsept from '../../icons/bearbeidingavvalgtkonsept.svg';
import Beslutningplan from '../../icons/beslutningplan.svg';
import Brukogforvaltning from '../../icons/brukogforvaltning.svg';
import CheckRound from '../../icons/check_round.svg';
import Check from '../../icons/check.svg';
import Detaljprosjektering from '../../icons/detaljprosjektering.svg';
import Oppstartplan from '../../icons/oppstartplan.svg';
import Overleveringogibruktakelse from '../../icons/overleveringogibruktakelse.svg';
import ArrowRound from '../../icons/arrow_round.svg';
import Arrow from '../../icons/arrow.svg';
import Planinitiativ from '../../icons/planinitiativ.svg';
import Produksjonogleveranser from '../../icons/produksjonogleveranser.svg';
import Programogkonseptutvikling from '../../icons/programogkonseptutvikling.svg';
import Bulletpoint from '../../icons/bulletpoint.svg';
import Reguleringsplan from '../../icons/reguleringsplan.svg';
import Strategiskdefinisjon from '../../icons/strategiskdefinisjon.svg';
import Toppen from '../../icons/toppen.svg';

const iconStyle = (deg, mirror) => ({
  transform: `${deg ? `rotate(${deg}deg)` : ''} ${mirror ? 'scale(-1, 1)' : ''}`
});

const LinkStep = memo(({ type, rotate, mirror }) => (
  <div aria-hidden className="icon" style={iconStyle(rotate, mirror)}>
    {type === 'arrowcollapse' && <ArrowCollapse />}
    {type === 'avvikling' && <Avvikling />}
    {type === 'bearbeidingavvalgtkonsept' && <Bearbeidingavvalgtkonsept />}
    {type === 'beslutningplan' && <Beslutningplan />}
    {type === 'brukogforvaltning' && <Brukogforvaltning />}
    {type === 'checkround' && <CheckRound />}
    {type === 'check' && <Check />}
    {type === 'detaljprosjektering' && <Detaljprosjektering />}
    {type === 'oppstartplan' && <Oppstartplan />}
    {type === 'overleveringogibruktakelse' && <Overleveringogibruktakelse />}
    {type === 'arrowround' && <ArrowRound />}
    {type === 'arrow' && <Arrow />}
    {type === 'planinitiativ' && <Planinitiativ />}
    {type === 'produksjonogleveranser' && <Produksjonogleveranser />}
    {type === 'programogkonseptutvikling' && <Programogkonseptutvikling />}
    {type === 'bulletpoint' && <Bulletpoint />}
    {type === 'reguleringsplan' && <Reguleringsplan />}
    {type === 'strategiskdefinisjon' && <Strategiskdefinisjon />}
    {type === 'toppen' && <Toppen />}
  </div>
));

LinkStep.propTypes = {
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
  ]).isRequired,
  rotate: PropTypes.number,
  mirror: PropTypes.bool
};

export default LinkStep;
