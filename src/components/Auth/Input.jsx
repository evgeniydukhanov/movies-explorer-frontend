import './input.css';

function Input({ title, onChange, name, type, error, disabled }) {
  const requiredProps =
    type === 'text'
      ? { minLength: 2, maxLength: 30 }
      : type === 'password'
      ? { minLength: 3 }
      : null;

  return (
    <label className='input-label'>
      {title}
      <input
        name={name}
        type={type}
        className={`input ${error && 'input_error-color'}`}
        onChange={onChange}
        disabled={disabled}
        required
        {...requiredProps}
      ></input>
      <span className={`input-error ${error && 'input-error_visible'} text`}>
        {error}
      </span>
    </label>
  );
}

export default Input;
