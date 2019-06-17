import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import { Waypoint } from 'react-waypoint';
import classNames from 'classnames';

import Icon from '../Icon';
import ContentCard from '../ContentCard';
import Collapsible from '../Collapsible';
import './AdvicesCard.scss';

const serializers = {
  types: {
    linkFile: props => {
      console.log(props);
      return (
        <a href={props.node.someFile.asset.url}>{props.node.description}</a>
      );
    }
  }
};

const AdvicesCard = ({
  title = '',
  advices = [],
  role = '',
  collapsible = false
}) => {
  const linkClasses = active =>
    classNames({
      'advices-card__item animate-hidden': true,
      'animate-in': active
    });

  const [isInView, setIsInView] = useState(false);

  // Error check
  if (!advices) return null;

  // Get advices for selected role
  const currentAdvices = advices.filter(advice =>
    advice.role ? advice.role.includes(role) : null
  );

  // Error check
  if (!currentAdvices.length) return null;

  // Should we show the details collapsed (accordion style) or normal?
  const CardDetails = ({ children }) => {
    if (collapsible) {
      return <Collapsible title={title}>{children}</Collapsible>;
    }
    return (
      <>
        <h2 className="text-center">{title}</h2>
        {children}
      </>
    );
  };

  return (
    <ContentCard>
      <CardDetails>
        <Waypoint
          bottomOffset="50"
          onEnter={() => {
            setIsInView(true);
          }}
        >
          <ul className="ul-check mt-4">
            {currentAdvices.map(advice => {
              const { _key, text } = advice;
              return (
                <li key={_key} className={linkClasses(isInView)}>
                  <div className="li-icon">
                    <Icon type="check" size="small" />
                  </div>
                  <BlockContent blocks={text} serializers={serializers} />
                </li>
              );
            })}
          </ul>
        </Waypoint>
      </CardDetails>
    </ContentCard>
  );
};

export default AdvicesCard;

AdvicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  collapsible: PropTypes.bool,
  advices: PropTypes.array
};
