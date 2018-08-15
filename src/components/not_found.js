import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from './card';
import data from '../data/data';

const { systemRecommend } = data;

const renderCards = (stores) => {
  return _.map(stores, (store) => {
    return (
      <Card key={store.id} store={store} />
    );
  });
};

const Notfound = ({ tags }) => {
  return (
    <div>
      <h1 className="panel__main-heading">
        找不到！
      </h1>
      <Link to="/" title="回「吃什麼」首頁">
        回首頁
      </Link>
      或看熱門關鍵字
      <Link to={`/tags/${tags[0]}`}>
        {tags[0]}
      </Link>
      、
      <Link to={`/tags/${tags[1]}`}>
        {tags[1]}
      </Link>
      、
      <Link to={`/tags/${tags[2]}`}>
        {tags[2]}
      </Link>
      <hr />
      <div className="mt-2x">
        <h1 className="panel__main-heading">
        猜你想吃
        </h1>
        <div className="card-list">
          { renderCards(systemRecommend) }
        </div>
      </div>
    </div>
  );
};

Notfound.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Notfound;
