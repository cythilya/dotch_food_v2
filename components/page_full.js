import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import TagList from './tag_list';
import data from '../data/data';
import '../style/index.css';

const {
  hotCategories,
  categories,
  hotTopics,
} = data;

function PageFull(props) {
  const { children } = props;

  return (
    <div>
      <div>
        <Header />
        <div className="app-container">
          <div className="app-main-content">
            { children }
          </div>
          <div className="app-menu">
            <div className="panel">
              <h1 className="panel__main-heading mb-1x">
                熱門主題
              </h1>
              <TagList tags={hotCategories} />
            </div>
          </div>
        </div>
        <Footer categories={categories} topics={hotTopics} />
      </div>
    </div>
  );
}

PageFull.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect(state => state)(PageFull);
