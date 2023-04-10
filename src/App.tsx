import React, { useState } from 'react';
import createMap from './utils/createMap';

function App(): JSX.Element {
  const students = [
    'аина',
    'саша',
    'витя',
    'сережа',
    'эдуард',
    'колесо',
    'денис',
    'аня',
    'маша',
    'вика',
    'алексей',
    'ренат',
    'дима',
    'бомж',
    'афанасий',
    'кирилл',
  ];

  console.log(createMap(students));

  // Функция createMap принимает массив строк-имён и возвращает кортеж:
  // первый элемент это объект с ключами w1d1, w1d2, ... и значениями -- парами или группами имён
  // второй элемент это массив самих студентов, со списком, с кем они были

  return <div className="App">1</div>;
}

export default App;
