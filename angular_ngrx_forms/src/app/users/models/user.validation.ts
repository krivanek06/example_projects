import { ValidationErrors } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();

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

export async function isValidUSNumber(number: string): Promise<boolean> {
  try {
    const usNumber = phoneUtil.parse(number, 'SK');
    return phoneUtil.isValidNumberForRegion(usNumber, 'SK');
  } catch {
    return false;
  }
}
