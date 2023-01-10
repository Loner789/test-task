// Imports:
import { useState, useCallback } from 'react';

// Custom Hook:
function useFormAndValidation() {
  // Constants:
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  // Functions:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
    setErrors,
  };
}

export default useFormAndValidation;
