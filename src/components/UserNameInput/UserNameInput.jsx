// Imports:
import React, { useState, useEffect } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import Form from '../Form/Form';

// UserNameInput component:
const UserNameInput = (props) => {
  // Constants:
  const { user, currentUser, onUserChange } = props;
  const { values, errors, isValid, handleChange, setValues } =
    useFormAndValidation({ user: currentUser });
  const [isLoggedUser, setIsLoggedUser] = useState(false);

  // Side-effects:
  useEffect(() => {
    if (user) {
      setIsLoggedUser(true);
    }

    setValues({ user: currentUser });
  }, [user, currentUser]);

  // Functions:
  const handleSubmit = (e) => {
    e.preventDefault();

    const { user } = values;

    onUserChange(user);
    setIsLoggedUser(true);
  };

  return (
    <div className='container mb-4'>
      {!isLoggedUser ? (
        <Form
          onSubmit={handleSubmit}
          inputName='user'
          title='Имя пользователя:'
          value={values.user}
          onChange={handleChange}
          btnText='Подтвердить'
          isValid={isValid}
          error={errors.user}
        />
      ) : (
        <div>
          <p className='text-center text-success h4 p-2 border border-dark'>
            Пользователь: {values.user || ''}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserNameInput;
