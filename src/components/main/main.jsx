import React from 'react';
import {
  // LoaderContext,
  FitText,
  QrCode,
  // useMedia,
  // useConfig,
  // useTemplate,
  // useTemplateVal,
  // useTemplateBoolVal,
  // useTemplateIntVal,
  // useTemplateFloatVal,
  // useScreenInfo,
} from '@dsplay/react-template-utils';
import './main.sass';

import CustomerImage from '../customerImage/customerImage';
import CustomerInfo from '../customerInfo/customerInfo';
import CustomerDetail from '../customerDetail/customerDetail';

function Main() {
  // const config = useConfig();
  // const media = useMedia();
  // const template = useTemplate();
  // const { screenFormat } = useScreenInfo();
  // const context = useContext(LoaderContext);

  // const { locale } = config;
  // const { duration } = media;

  // const { t, i18n } = useTranslation();

  // i18n.changeLanguage(locale);

  return (
    <div className="flex main">
      <div className="center z-avatar">
        <CustomerImage />
      </div>
      <div className="center card">
        <div className="main-c-info">
          <CustomerInfo />
        </div>
        <div className="main-c-detail">
          <CustomerDetail />
        </div>
        <div>
          <QrCode
            options={{
              text: 'https://www.linkedin.com/in/alessandroflima/',
            }}
          />
        </div>
        <div className="cta-qrcode">
          <FitText>Escaneie para conversar com Ada Lovelace</FitText>
        </div>
      </div>
    </div>

  );
}

export default Main;
