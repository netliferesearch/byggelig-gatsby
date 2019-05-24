import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import Icon from '../Icon';
import ContentCard from '../ContentCard';
import Collapsible from '../Collapsible';
import './AdvicesCard.scss';

const AdvicesCard = ({
  title = '',
  advices = [],
  role = '',
  collapsible = false
}) => {
  // Error check
  if (!advices) return null;

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
        <ul className="ul-check mt-4">
          {advices
            .filter(advice => (advice.role ? advice.role.includes(role) : null))
            .map(advice => {
              const { _key, text } = advice;
              return (
                <li key={_key} className="advices-card__item">
                  <div className="li-icon">
                    <Icon type="check" size="small" />
                  </div>
                  <BlockContent blocks={text} />
                </li>
              );
            })}
        </ul>
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
