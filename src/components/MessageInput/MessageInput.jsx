// Imports:
import React, { useEffect } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Form from '../Form/Form';

// Initial data for state-variable
const initValues = {
  message: '',
};

// MessageInput component:
const MessageInput = (props) => {
  // Constants:
  const { onMessageSend } = props;
  const {
    values,
    errors,
    isValid,
    handleChange,
    setIsValid,
    setValues,
    resetForm,
  } = useFormAndValidation(initValues);

  // Side-effects:
  useEffect(() => {
    setIsValid(false);
    setValues(initValues);
  }, []);

  // Functions:
  const handleSubmit = (e) => {
    e.preventDefault();

    const { message } = values;

    if (!message) return;

    onMessageSend(message);
    resetForm();
    setValues(initValues);
  };

  return (
    <div className='container mt-4'>
      <Form
        onSubmit={handleSubmit}
        inputName='message'
        title='Сообщение:'
        value={values.message}
        onChange={handleChange}
        btnText='Отправить'
        isValid={isValid}
        error={errors.message}
      />
    </div>
  );
};

export default MessageInput;
