import React from 'react';
import InputBox from '../components/InputBox/InputBox';

export default {
  title: 'InputBox'
};

export const Basic = () => (
  <InputBox
    name="Запрос"
    status="idle"
    onChange={value => console.log(value)}
  />
);

export const Succes = () => (
  <InputBox
    name="Запрос"
    status="success"
    statusText="Запрос выполнен успешно"
    onChange={value => console.log(value)}
  />
);

export const Error = () => (
  <InputBox
    name="Запрос"
    status="error"
    statusText="Запрос не выполнен"
    onChange={value => console.log(value)}
  />
);
