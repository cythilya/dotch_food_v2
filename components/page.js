import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import NoSSR from 'react-no-ssr';
import Header from './header';
// import Slideshow from './slideshow';
import Newsticker from 'react-newsticker';
import Footer from './footer';
import TagList from './tag_list';
import data from '../data/data';
import '../style/index.css';

const {
  hotCategories,
  categories,
  hotTopics,
  news,
} = data;

function Page(props) {
  const { id } = props;

  return (
    <div>
      <div>
        <Header />
        {/* <NoSSR>
          { id === 'index' && <Slideshow interval={1000} pause={4000} />}
        </NoSSR> */}
        <div className="newsticker">
          <Newsticker news={news} />
        </div>
        <div className="app-container">
          <div className="app-main-content">
            { props.children }
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

Page.propTypes = {
  id: PropTypes.string.isRequired,
};

export default connect(state => state)(Page);
