import React from 'react';

import './dsplayCard.sass';

function DsplayCard() {
  return (
    <div className="main">
      <div className="container">
        <div className="cards card_outer">
          <div className="card">
            <div className="top image">
              <p>Link</p>
            </div>
            <div className="bottom content">
              <small>Sponsored</small>
              <p>Lorem Ipsum is simply dummy text...</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default DsplayCard;
