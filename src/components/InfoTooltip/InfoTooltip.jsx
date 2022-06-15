import React, { useState } from 'react';
import tooltip from '../../images/tooltip.png';
function InfoToolTip() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  function closePopup() {
    setPopupOpen(true);
  }
  return (
    <div className={`popup ${isPopupOpen && 'popup_opened'}`}>
      <div className='popup__container' style={{ alignItems: 'center' }}>
        <img
          className='tooltipPic'
          style={{ width: 120, paddingTop: 60 }}
          src={tooltip}
          alt='Ошибка'
        ></img>
        <button
          className='popup__close-button'
          onClick={closePopup}
          type='button'
        ></button>
        <h2
          className='popup__heading'
          style={{ textAlign: 'center', margin: 36 }}
        >
          Что-то пошло не так!
        </h2>
      </div>
    </div>
  );
}

export default InfoToolTip;
