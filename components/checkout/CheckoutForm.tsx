'use client';
import formDefaultData from '@/data/checkoutFormDefault';
import { useState } from 'react';

type CheckoutFormProps = {
  state: typeof formDefaultData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckoutForm = ({ state, handleChange }: CheckoutFormProps) => {
  const emoneyRadioBtnStyle =
    state.payment_method.value === 'e-money' ? 'border-bg-accent' : '';
  const cashRadioBtnStyle =
    state.payment_method.value === 'cash' ? 'border-bg-accent' : '';

  const {
    adress,
    city,
    country,
    e_money_number,
    e_money_pin,
    email,
    name,
    payment_method,
    phone,
    zip,
  } = state;

  return (
    <section className='bg-bg-light-primary rounded-lg py-8 px-6'>
      <h2 className='h4 font-medium'>checkout</h2>
      <form>
        <div>
          <h2>billing details</h2>
          <div>
            <div className='label-error-wrapper'>
              <label htmlFor='name'>Name</label>
              {name.error && <span className='error'>{name.errorMessage}</span>}
            </div>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Alexei Ward'
              onChange={handleChange}
              value={name.value}
              className={`${name.error && 'border-[var(--error-clr)]'} `}
            />
          </div>
          <div>
            <div className='label-error-wrapper'>
              <label htmlFor='email'>Email Adress</label>
              {name.error && (
                <span className='error'>{email.errorMessage}</span>
              )}
            </div>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='alexei@mail.com'
              onChange={handleChange}
              value={email.value}
              className={`${email.error && 'border-[var(--error-clr)]'} `}
            />
          </div>
          <div>
            <div className='label-error-wrapper'>
              <label htmlFor='phone'>Phone number</label>
              {phone.error && (
                <span className='error'>{phone.errorMessage}</span>
              )}
            </div>
            <input
              type='text'
              id='phone'
              name='phone'
              placeholder='+12020-555-222'
              onChange={handleChange}
              value={phone.value}
              className={`${phone.error && 'border-[var(--error-clr)]'} `}
            />
          </div>
        </div>
        <div>
          <h2>shipping info</h2>
          <div>
            <div className='label-error-wrapper'>
              <label htmlFor='adress'>address</label>
              {adress.error && (
                <span className='error'>{adress.errorMessage}</span>
              )}
            </div>
            <input
              type='text'
              id='adress'
              name='adress'
              placeholder='1124 Williams Avenue'
              onChange={handleChange}
              value={adress.value}
              className={`${adress.error && 'border-[var(--error-clr)]'} `}
            />
          </div>
          <div>
            <div className='label-error-wrapper'>
              <label htmlFor='zip'>
                <span className='uppercase mr-1'>zip</span>
                <span>Code</span>
              </label>
            </div>
            {zip.error && <span className='error'>{zip.errorMessage}</span>}
            <input
              type='text'
              name='zip'
              id='zip'
              placeholder='10010'
              onChange={handleChange}
              value={zip.value}
              className={`${zip.error && 'border-[var(--error-clr)]'} `}
            />
          </div>
          <div>
            <div className='label-error-wrapper'>
              <label htmlFor='city'>city</label>
              {city.error && <span className='error'>{city.errorMessage}</span>}
            </div>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='New York'
              onChange={handleChange}
              value={city.value}
              className={`${city.error && 'border-[var(--error-clr)]'} `}
            />
          </div>
          <div>
            <div className='label-error-wrapper'>
              <label htmlFor='country'>Country</label>
              {country.error && (
                <span className='error'>{country.errorMessage}</span>
              )}
            </div>
            <input
              type='text'
              id='country'
              name='country'
              placeholder='United States'
              onChange={handleChange}
              value={country.value}
              className={`${country.error && 'border-[var(--error-clr)]'} `}
            />
          </div>
        </div>
        <div>
          <h2>payment details</h2>
          <div className='mb-8'>
            <fieldset>
              <div className='label-error-wrapper'>
                <legend className='font-medium mb-4'>Payment Method</legend>
                {payment_method.error && (
                  <span className='error'>{payment_method.errorMessage}</span>
                )}
              </div>
              <div
                className={`border rounded-md mb-4 px-4 py-3 flex items-center ${emoneyRadioBtnStyle}`}
              >
                <input
                  type='radio'
                  name='payment_method'
                  id='e-money'
                  value='e-money'
                  className='mr-2'
                  checked={payment_method.value === 'e-money'}
                  onChange={handleChange}
                />
                <label htmlFor='e-money' className='m-0'>
                  e-Money
                </label>
              </div>
              <div
                className={`border rounded-md mb-4 px-4 py-3 flex items-center ${cashRadioBtnStyle}`}
              >
                <input
                  type='radio'
                  name='payment_method'
                  id='cash'
                  value='cash'
                  className='mr-2'
                  checked={payment_method.value === 'cash'}
                  onChange={handleChange}
                />
                <label htmlFor='cash' className='m-0'>
                  Cash <span className='lowercase'>on</span> Delivery
                </label>
              </div>
            </fieldset>
          </div>
          <div>
            <div>
              <div className='label-error-wrapper'>
                <label htmlFor='e-money-number'>e-Money Number</label>
                {e_money_number.error && (
                  <span className='error'>{e_money_number.errorMessage}</span>
                )}
              </div>
              <input
                type='number'
                name='e_money_number'
                id='e-money-number'
                placeholder='234515920'
                onChange={handleChange}
                value={e_money_number.value}
                className={`${
                  e_money_number.error && 'border-[var(--error-clr)]'
                } `}
              />
            </div>
            <div>
              <div className='label-error-wrapper'>
                <label htmlFor='e-money-pin'>e-Money PIN</label>
                {e_money_pin.error && (
                  <span className='error'>{e_money_pin.errorMessage}</span>
                )}
              </div>
              <input
                type='number'
                name='e_money_pin'
                id='e-money-pin'
                placeholder='6548'
                onChange={handleChange}
                value={e_money_pin.value}
                className={`${
                  e_money_pin.error && 'border-[var(--error-clr)]'
                } `}
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default CheckoutForm;
