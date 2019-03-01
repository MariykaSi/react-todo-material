import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";
import { withTranslation } from "react-i18next";

import Languages from "../../components/Molecules/Languages";
import ItemsContainer from "../../components/Organisms/ItemsContainer";
import CommentsContainer from "../../components/Organisms/CommentsContainer";
import {
  addItem,
  deleteItem,
  changeSelectedItem,
  addComment
} from "../../actions/item";

import "./styles.scss";

class Home extends Component {
  state = {
    newItem: "",
    newComment: ""
  };

  handleAddItem = value => {
    this.setState({
      newItem: value
    });
  };

  handleSubmitItem = () => {
    const { addItem } = this.props;
    const { newItem } = this.state;
    if (!newItem.length) return;
    addItem([{ title: newItem, id: uuidv1(), comments: [] }]);
    this.setState({ newItem: "" });
  };

  handleAddComment = value => {
    this.setState({
      newComment: value
    });
  };

  handleSubmitComment = () => {
    const { addComment } = this.props;
    const { newComment } = this.state;
    if (!newComment.length) return;
    addComment({ text: newComment, id: uuidv1() });
    this.setState({ newComment: "" });
  };

  deleteItem = id => {
    this.props.deleteItem(id);
  };

  clickItem = id => {
    this.props.changeSelectedItem(id);
  };

  render() {
    const { list, selectedItem, t } = this.props;
    const { newItem, newComment } = this.state;

    const item = list.find(item => item.id === selectedItem);
    const indexItem = list.indexOf(item);
    return (
      <div className="page">
        <div className="main">
          <div className="sidebar">
            <h1>{t("title")}</h1>
            <Languages />
          </div>
          <div className="container">
            <ItemsContainer
              onChange={this.handleAddItem}
              onClick={this.handleSubmitItem}
              deleteItem={this.deleteItem}
              clickItem={this.clickItem}
              items={list}
              selectedItem={selectedItem}
              newItem={newItem}
            />
            {list[indexItem] && (
              <CommentsContainer
                comments={list[indexItem].comments}
                item={indexItem + 1}
                onChange={this.handleAddComment}
                onClick={this.handleSubmitComment}
                newComment={newComment}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  addItem,
  deleteItem,
  addComment,
  changeSelectedItem
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
const translator = withTranslation();

export default translator(connector(Home));
