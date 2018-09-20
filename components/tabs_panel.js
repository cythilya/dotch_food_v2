import React from 'react';
import PropTypes from 'prop-types';

const TabsPanel = ({ panel, activeIndex }) => {
  const activeClass = panel.id === activeIndex ? 'selected' : '';

  return (
    <div
      key={panel.title}
      id={panel.hash}
      className={`tabs__panel__item ${activeClass}`}
    >
      {panel.content}
    </div>
  );
};

TabsPanel.propTypes = {
  panel: PropTypes.object.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default TabsPanel;
