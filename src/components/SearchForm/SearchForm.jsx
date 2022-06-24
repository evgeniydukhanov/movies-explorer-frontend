import React from 'react';
import lens from '../../images/lens.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  onChange,
  onSubmit,
  searchText,
  toggleCheckbox,
  checkbox,
}) {
  return (
    <div className='search'>
      <form className='search__form' onSubmit={onSubmit}>
        <img className='search__icon' src={lens} alt='лупа'></img>
        <input
          className='search__input'
          placeholder='Фильм'
          type='text'
          onChange={onChange}
          value={searchText}
          required
        ></input>
        <button className='search__button' type='submit'></button>
      </form>
      <FilterCheckbox toggleCheckbox={toggleCheckbox} checkbox={checkbox} />
    </div>
  );
}

export default SearchForm;
