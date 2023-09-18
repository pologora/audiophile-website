'use client';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import Summary from '@/components/checkout/Summary';
import GoBackBtn from '@/components/shared/GoBackBtn';
import formDefaultData from '@/data/checkoutFormDefault';
import { useState } from 'react';

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
    for (const [key, value] of Object.entries(state)) {
      const isValid = isValidInputValue(value.value, value.pattern);
      if (!isValid) {
        isError = true;
        setState((prev) => {
          return { ...prev, [key]: { ...prev[key], error: true } };
        });
      }
    }
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
    <div className='bg-bg-light-secondary px-6'>
      <div className='custom-container'>
        <GoBackBtn />
      </div>
      <div className='lg:flex gap-4 custom-container'>
        <CheckoutForm handleChange={handleInputChange} state={state} />
        <Summary
          onSubmit={onSubmit}
          closeConfirmModal={closeConfirmModal}
          isOpenConfirmModal={isOpenConfirmModal}
        />
      </div>
    </div>
  );
};
export default Checkout;
