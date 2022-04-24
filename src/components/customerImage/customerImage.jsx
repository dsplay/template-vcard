import React from 'react';

import './customerImage.sass';
import {
  useMedia,
} from '@dsplay/react-template-utils';

function CustomerImage() {
  const media = useMedia();
  const { avatar } = media;
  return (
    <div className="avatar" style={{ backgroundImage: `url("${avatar}")` }} />

  );
}

export default CustomerImage;
