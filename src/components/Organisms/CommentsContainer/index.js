import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import AddNewComments from "../../Molecules/AddNewComments";
import CommentImage from "../../Atoms/CommentImage";

import "./styles.scss";

class CommentsContainer extends PureComponent {
  render() {
    const { t, comments, item, onClick, onChange } = this.props;
    return (
      <div className="сommentsContainer">
        <h2>
          {t("comments")} #{item}
        </h2>
        <div className="сommentsItems">
          {!!comments &&
            comments.map(item => (
              <div key={item.id} className="сomment">
                <CommentImage />
                <div className="сommentText">{item.text}</div>
              </div>
            ))}
        </div>
        <AddNewComments onChange={onChange} onClick={onClick} />
      </div>
    );
  }
}

CommentsContainer.defaultProps = {
  onClick: null,
  onChange: null,
  comments: null
};

CommentsContainer.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  comments: PropTypes.array,
  item: PropTypes.number.isRequired
};
export default withTranslation()(CommentsContainer);
