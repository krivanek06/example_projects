import { ValidationErrors } from '@angular/forms';

export const noChris = (name: string | null | undefined): ValidationErrors => {
  const errors: ValidationErrors = {};
  if (name && name.toLowerCase() === 'chris') {
    return { noChris: 'No one named Chris!' };
  }
  return errors;
};

export const minAgeValidation = (minAge: number) => {
  return (value: number) => {
    return value >= minAge ? null : { minAge: true };
  };
};
