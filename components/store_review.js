import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { change } from 'redux-form';
import StoreComments from './store_comments';
import CommentDataForm from './comment_form';
import '../style/components/store_review.css';
import {
  saveCommentData,
  insertCommentData,
} from '../actions/index';

class StoreReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenReviewForm: false,
      isFormValid: 1, // 0: error, 1: initial, 2: success
    };

    this.renderStoreComments = this.renderStoreComments.bind(this);
    this.enableCommentForm = this.enableCommentForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleSubmitFail = this.handleSubmitFail.bind(this);
    this.resetFormStatus = this.resetFormStatus.bind(this);
    this.closeStoreCommentForm = this.closeStoreCommentForm.bind(this);
  }

  componentDidMount() {
    const { dispatch, comments, storeid } = this.props;
    dispatch(change('commentData', 'docid', comments.id));
    dispatch(change('commentData', 'id', storeid));
  }

  componentDidUpdate(prevProps) {
    const { dispatch, comments, storeid } = this.props;

    if (comments.id !== prevProps.comments.id) {
      dispatch(change('commentData', 'docid', comments.id));
    }

    if (storeid !== prevProps.storeid) {
      dispatch(change('commentData', 'id', storeid));
    }
  }

  enableCommentForm() {
    this.setState({ isOpenReviewForm: true });
  }

  handleFormSubmit(values) {
    const { dispatch, comments } = this.props;

    if (comments.id) {
      dispatch(saveCommentData(values)).then(() => {
        this.setState({ isFormValid: 2 });
      });
    } else {
      dispatch(insertCommentData(values)).then(() => {
        this.setState({ isFormValid: 2 });
      });
    }
  }

  handleSubmitFail() {
    this.setState({ isFormValid: 0 });
  }

  resetFormStatus(status) {
    this.setState({ isFormValid: status });
  }

  closeStoreCommentForm() {
    this.setState({
      isOpenReviewForm: false,
      isFormValid: 1,
    });
  }

  renderStoreComments(commentInfo, storeid) {
    const { isOpenReviewForm, isFormValid } = this.state;
    const comments = commentInfo.commentList || [];
    const commentList = comments.length > 0 ? <StoreComments comments={comments} /> : <div className="store-info__no-comments">暫無評價!</div>;
    return (
      <div>
        { isOpenReviewForm
          && (
            <CommentDataForm
              id={commentInfo.id}
              storeid={storeid}
              isFormValid={isFormValid}
              onSubmit={this.handleFormSubmit}
              onSubmitFail={this.handleSubmitFail}
              closeForm={this.closeStoreCommentForm}
              resetFormStatus={this.resetFormStatus}
            />
          )
        }
        { commentList }
      </div>
    );
  }

  render() {
    const { comments, storeid } = this.props;

    return (
      <div className="store-review">
        <div className="store-review__control">
          <div>
            想說什麼嗎？
            <span
              className="store-review__feedback"
              onClick={this.enableCommentForm}
              onKeyDown={this.enableCommentForm}
            >
              點這裡
            </span>
            給評價！
          </div>
        </div>
        { this.renderStoreComments(comments, storeid) }
      </div>
    );
  }
}


StoreReview.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comments: PropTypes.object,
  storeid: PropTypes.string.isRequired,
};

StoreReview.defaultProps = {
  comments: {},
};

export default connect(state => state)(StoreReview);
