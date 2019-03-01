import React, { PureComponent } from "react";

import Button from "@material-ui/core/Button";
import { withTranslation } from "react-i18next";
import Language from "@material-ui/icons/Language";

import flagEN from "../../../assets/images/lang-en.png";
import flagHR from "../../../assets/images/lang-hr.png";

import "./styles.scss";

class Languages extends PureComponent {
  render() {
    const { t, i18n } = this.props;
    return (
      <div className="langContainer">
        <Button variant="contained" className="button">
          <Language />
          {t("buttons.languages")}
        </Button>
        <div className="popup">
          <div className="arrow-up" />
          <div className="lang">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="langItem"
            >
              EN <img src={flagEN} alt={t("en")} />
              English
            </button>
            <button
              onClick={() => i18n.changeLanguage("hr")}
              className="langItem"
            >
              HR
              <img src={flagHR} alt={t("hr")} /> Croatian
            </button>
            <button
              onClick={() => i18n.changeLanguage("pl")}
              className="langItem"
            >
              PL <img src={flagEN} alt={t("en")} />
              Poland
            </button>
            <button
              onClick={() => i18n.changeLanguage("ru")}
              className="langItem"
            >
              RU <img src={flagEN} alt={t("en")} />
              Russia
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Languages);
