import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

const collapsibleClasses = open =>
  classNames({
    collapsible: true,
    'collapsible--true': open
  });

const contentWrapperClasses = open => classNames({
  'collapsible__content-wrapper': true,
  'collapsible__content-wrapper--': open
});

const Collapsible = props => {
  const [open, setOpen] = useState(false);
  const parentElement = useRef(null);

  useEffect(() => {
    if (open || props.open) {
      zenscroll.intoView(parentElement.current, 300);
    }
  }, [open, props.open]);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <div className={collapsibleClasses(open)} ref={parentElement}>
      <button onClick={setOpen(!open)} aria-expanded={open} className={}>
        {props.heading}
        <Icon type="arrowcollapse" rotate={open ? 180 : 0} />
      </button>
      <div className={contentWrapperClasses(open)}>{props.children}</div>
    </div>
  );
};

Collapsible.propTypes = {
  heading: PropTypes.string,
  open: PropTypes.bool
};

export default Collapsible;
