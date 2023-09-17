'use client';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import Summary from '@/components/checkout/Summary';
import GoBackBtn from '@/components/shared/GoBackBtn';
import { useState } from 'react';

type FormField = {
  value: string;
  error: boolean;
  errorMessage: string;
  pattern: RegExp;
};

export const formDefaultData = {
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
    errorMessage: 'Wrong format',
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
    errorMessage: 'Wrong format',
    pattern: /^\d+$/,
  },
  e_money_pin: {
    value: '',
    error: false,
    errorMessage: 'Wrong format',
    pattern: /^\d{4}$/,
  },
} as Record<string, FormField>;

const Checkout = () => {
  const [state, setState] = useState(formDefaultData);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = () => setIsOpenConfirmModal(true);

  const isValidInputValue = (value: string, regex: RegExp) => {
    return regex.test(value);
  };

  const acceptForm = () => console.log('form accepted');
  const resetForm = () => setState(formDefaultData);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const onSubmit = () => {
    let isError = false;
    // for (const [key, value] of Object.entries(state)) {
    //   const isValid = isValidInputValue(value.value, value.pattern);
    //   if (!isValid) {
    //     isError = true;
    //     setState((prev) => {
    //       return { ...prev, [key]: { ...prev[key], error: true } };
    //     });
    //   }
    // }
    if (!isError) {
      acceptForm();
      openConfirmModal();
      resetForm();
    } else {
      scrollToTop();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setState((prev) => {
      return { ...prev, [name]: { ...prev[name], value: value, error: false } };
    });
  };

  return (
    <div className='bg-bg-light-secondary px-6 border'>
      <GoBackBtn />
      <CheckoutForm handleChange={handleInputChange} state={state} />
      <Summary
        onSubmit={onSubmit}
        closeConfirmModal={closeConfirmModal}
        isOpenConfirmModal={isOpenConfirmModal}
      />
    </div>
  );
};
export default Checkout;
