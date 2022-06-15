import React from 'react';
import tooltip from '../../images/tooltip.png';
function InfoToolTip(props) {
  return (
    <div
      className={
        props.isOpen
          ? `popup popup_opened`
          : `popup `
      }
    >
      <div className='popup__container' style={{ alignItems: 'center' }}>
        <img
          className='tooltipPic'
          style={{ width: 120, paddingTop: 60 }}
          src={tooltip}
          alt='Ошибка'
        ></img>
        <button
          className='popup__close-button'
          onClick={props.onClose}
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
