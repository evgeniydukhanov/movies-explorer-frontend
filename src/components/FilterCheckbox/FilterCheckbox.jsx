import React, { useState } from 'react';

function FilterCheckbox() {
  const [checkbox, setActiveCheckbox] = useState(false);
  function toggleCheckbox(e) {
    setActiveCheckbox(!checkbox);
  }
  return (
    <div className='filter'>
      <button
        className={`${
          checkbox ? 'filter__checkbox' : 'filter__checkbox_active'
        }    `}
        type='button'
        onClick={toggleCheckbox}
      ></button>
      <p className='filter__name'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
