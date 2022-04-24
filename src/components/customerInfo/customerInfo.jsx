import React from 'react';

import './customerInfo.sass';
import {
  FitText,
  useMedia,
} from '@dsplay/react-template-utils';

function CustomerInfo() {
  const media = useMedia();
  const { name, role } = media;


  return (
    <div className="c-info">
      <FitText>{name}</FitText>
      <div className="c-info-hole">
        <FitText>{role}</FitText>
      </div>
    </div>

  );
}

export default CustomerInfo;
