import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp'


const divRoot=document.querySelector('#root');

ReactDOM.render(<PrimeraApp saludo="12345"/>, divRoot);
