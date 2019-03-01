import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import Button from "@material-ui/core/Button";

import "./styles.scss";

class ListItems extends PureComponent {
  render() {
    const { t, items, deleteItem, selectedItem } = this.props;
    return (
      <ul className="listItemContainer">
        {items[0] &&
          items.map(item => {
            const selected = selectedItem === item.id ? "selected" : "";
            return (
              <li
                key={item.id}
                className={`listItem ${selected}`}
                onClick={() => this.props.clickItem(item.id)}
              >
                <div className="contentItem">
                  <div className="left">
                    <div className="text">{item.title}</div>
                    <span className="commentsCount">
                      {item.comments.length}
                    </span>
                  </div>
                  <div className="right">
                    <Button
                      variant="outlined"
                      color="secondary"
                      className="button"
                      onClick={() => deleteItem(item.id)}
                    >
                      {t("buttons.delete")}
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    );
  }
}

ListItems.defaultProps = {
  deleteItem: null,
  clickItem: null
};

ListItems.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func,
  clickItem: PropTypes.func
};

export default withTranslation()(ListItems);
