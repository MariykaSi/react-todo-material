import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./styles.scss";

class AddNew extends PureComponent {
  render() {
    const { t, onClick, onChange, value } = this.props;
    return (
      <div className="addNew">
        <TextField
          label={t("buttons.newItemPlaceholder")}
          variant="outlined"
          id="custom-css-outlined-input"
          className="input-field"
          onChange={e => onChange(e.target.value)}
          value={value}
        />
        <Button variant="contained" onClick={() => onClick()}>
          {t("buttons.addNew")}
        </Button>
      </div>
    );
  }
}

AddNew.defaultProps = {
  onClick: null,
  onChange: null,
  value: ""
};

AddNew.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default withTranslation()(AddNew);
