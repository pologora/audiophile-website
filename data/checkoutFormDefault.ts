type FormField = {
  value: string;
  error: boolean;
  errorMessage: string;
  pattern: RegExp;
};

const formDefaultData = {
  name: {
    value: '',
    error: false,
    errorMessage: 'Wrong format',
    pattern: /^[A-Za-z]+([-']?[A-Za-z]+)?$/,
  },
  email: {
    value: '',
    error: false,
    errorMessage: 'Wrong format',
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  phone: {
    value: '',
    error: false,
    errorMessage: 'At least 7 digits',
    pattern: /^[0-9-+() ]{7,20}$/,
  },
  adress: {
    value: '',
    error: false,
    errorMessage: 'Wrong format',
    pattern: /^[0-9A-Za-z\s]+$/,
  },
  zip: {
    value: '',
    error: false,
    errorMessage: 'Wrong format',
    pattern: /^\d{5}(-\d{4})?$/,
  },
  city: {
    value: '',
    error: false,
    errorMessage: 'Wrong format',
    pattern: /^[A-Za-z\s\-']{1,50}$/,
  },
  country: {
    value: '',
    error: false,
    errorMessage: 'Wrong format',
    pattern: /^[A-Za-z\s\-']{1,50}$/,
  },
  payment_method: {
    value: '',
    error: false,
    errorMessage: 'Please choose one',
    pattern: /^(e-money|cash)$/,
  },
  e_money_number: {
    value: '',
    error: false,
    errorMessage: 'Must be 8 digits',
    pattern: /^\d+$/,
  },
  e_money_pin: {
    value: '',
    error: false,
    errorMessage: 'Must be 4 digits',
    pattern: /^\d{4}$/,
  },
} as Record<string, FormField>;

export default formDefaultData;
