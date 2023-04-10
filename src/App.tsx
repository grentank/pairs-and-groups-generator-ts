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
  ];

  console.log(createMap(students));

  return <div className="App">1</div>;
}

export default App;
