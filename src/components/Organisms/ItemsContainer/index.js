import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import AddNew from "../../Molecules/AddNew";
import ListItems from "../../Molecules/ListItems";

import "./styles.scss";

class ItemsContainer extends PureComponent {
  render() {
    const {
      t,
      items,
      selectedItem,
      onClick,
      onChange,
      deleteItem,
      clickItem
    } = this.props;
    return (
      <div className="itemsContainer">
        <div className="itemsHeader">
          <h2>{t("items")}</h2>
          <AddNew onChange={onChange} onClick={onClick} />
        </div>
        <ListItems
          items={items}
          selectedItem={selectedItem}
          deleteItem={deleteItem}
          clickItem={clickItem}
        />
      </div>
    );
  }
}

ItemsContainer.defaultProps = {
  onClick: null,
  onChange: null,
  deleteItem: null,
  clickItem: null,
  selectedItem: "1"
};

ItemsContainer.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  deleteItem: PropTypes.func,
  clickItem: PropTypes.func,
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.string
};

export default withTranslation()(ItemsContainer);
