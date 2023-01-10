// Imports:
import React from 'react';

// Form component:
const Form = (props) => {
  // Constants:
  const {
    onSubmit,
    inputName,
    title,
    value,
    onChange,
    btnText,
    isValid,
    error,
  } = props;

  return (
    <form
      className=''
      name={`${inputName}-form`}
      onSubmit={onSubmit}
      noValidate
    >
      <div className='input-group-text d-flex bd-highlight flex-column'>
        <label htmlFor={inputName} className='w-100 m-2 d-flex flex-column'>
          {title}
          <input
            id={inputName}
            name={inputName}
            type='text'
            className='w-100'
            required
            pattern='^[a-zA-Zа-яА-Я0-9\s-]+$'
            value={value || ''}
            onChange={onChange}
          />
        </label>
        {!isValid && value !== '' && (
          <div className='container'>
            <p className='small text-danger'>Ошибка: {error}</p>
          </div>
        )}
        <button
          type='submit'
          className={`btn btn-primary mb-1 align-self-end ${
            isValid ? 'active' : 'disabled'
          }`}
        >
          {btnText}
        </button>
      </div>
    </form>
  );
};

export default Form;
