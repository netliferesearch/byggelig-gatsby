import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

import randomString from '../../utils/randomString';
import Icon from '../Icon';
import './Collapsible.scss';

const contentWrapperClasses = open =>
  classNames({
    'collapsible__content-wrapper': true,
    'collapsible__content-wrapper--open': open
  });

const iconClasses = open =>
  classNames({
    collapsible__icon: true,
    'collapsible__icon--open': open
  });

const Collapsible = props => {
  const [open, setOpen] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
  const parentElement = useRef(null);

  useEffect(() => {
    if (open) {
      zenscroll.intoView(parentElement.current, 300);
    }
  }, [open]);

  // Creates an unique id for the collapsible element, to avoid conflicts if there are multiple collapsible components on the same page.
  useEffect(() => {
    setUniqueId(randomString());
  }, []);

  return (
    <div className="collapsible" ref={parentElement}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={uniqueId}
        className="collapsible__button h2"
        role="heading"
        aria-level="2"
      >
        {props.title}
        <div className={iconClasses(open)}>
          <Icon type="arrowcollapse" rotate={open ? 0 : 180} />
        </div>
      </button>
      <div className={contentWrapperClasses(open)} id={uniqueId}>
        {props.children}
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string
};

export default Collapsible;
