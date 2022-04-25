import React from 'react';

import './customerDetail.sass';
import {
  FitText,
  useMedia,
} from '@dsplay/react-template-utils';

function CustomerDetail() {
  const media = useMedia();
  const { detail } = media;
  return (
    <div className="c-detail">
      <FitText>
        {detail}
      </FitText>
    </div>

  );
}

export default CustomerDetail;
