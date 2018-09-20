import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import TabsNav from './tabs_nav';
import TabsPanel from './tabs_panel';
import '../style/components/tabs.css';

const Tabs = ({ tabs, activeIndex, onClickTabNavHandler }) => {
  return (
    <div className="tabs">
      <div className="tabs__nav">
        {
          _.map(tabs, (item) => {
            const nav = {
              id: item.id,
              title: item.title,
              hash: item.hash,
            };

            return (
              <TabsNav key={item.title} nav={nav} activeIndex={activeIndex} onClickTabNavHandler={onClickTabNavHandler} />
            );
          })
        }
      </div>
      <div className="tab__panel">
        {
          _.map(tabs, (item) => {
            const panel = {
              id: item.id,
              title: item.title,
              hash: item.hash,
              content: item.content,
            };

            return (
              <TabsPanel key={item.title} activeIndex={activeIndex} panel={panel} />
            );
          })
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  onClickTabNavHandler: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default Tabs;
