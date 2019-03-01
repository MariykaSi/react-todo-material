import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CommentImage from "../../Atoms/CommentImage";

import "./styles.scss";

class AddNewComments extends PureComponent {
  render() {
    const { t, onClick, onChange, value } = this.props;
    return (
      <form className="addNewComments" noValidate autoComplete="off">
        <div className="row">
          <CommentImage />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows="4"
            className="textareaField"
            margin="normal"
            variant="outlined"
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        </div>
        <Button variant="contained" className="button" onClick={onClick}>
          {t("buttons.addNew")}
        </Button>
      </form>
    );
  }
}

AddNewComments.defaultProps = {
  onClick: null,
  onChange: null,
  value: ""
};

AddNewComments.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
};
export default withTranslation()(AddNewComments);
