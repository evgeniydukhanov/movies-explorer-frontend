import React, { useState } from 'react';
import tooltip from '../../images/tooltip.png';
function InfoToolTip() {
  const [isPopupOpened, setPopupOpened] = useState(true);
  function closePopup() {
    setPopupOpened(false);
  }
  return (
    <div className={`popup ${isPopupOpened && 'popup'}` }>
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
