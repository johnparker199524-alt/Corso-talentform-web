import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';

//import TermsCheckbox from './useState/esercizo/TermsCheckbox';
//import Users from './reactHttp/Users';
import Form2 from './reactHttp/httpPost/Form2';
import User2 from './reactHttp/httpGet/User2';
import Prodottos from './reactHttp/httpGet/Prodottos';
import Studente from './reactHttp/httpGet/Studente';
//import EmailInput from './useState/esercizo/EmailInput';
//import ColorChange from './useState/esercizo/ColorChange';
//import Usetate1 from './useState/esercizo/Usetate1';
//import CounterAction from './useState/esercizo/CounterAction';
//import UsernName from './useState/esercizo/UsernName';
//import Computer from './computer/Computer';
//import CarList from './Car/CarList';
//import Movie from './movieCar/Movie';
//import NumberCheck from './componentsConditionalProps/esercizio3heck/props/NumberCheck';
//import Esercizio1 from './componentsConditionalProps/Esercizio1/Esercizio1';
//import Esercizio2 from './componentsConditionalProps/Esercizio2';
//import ProductStatus from './componentsConditionalProps/esercizio2p/props/ProductStatus';
//import Corsi from './CourseList/Corsi';
//import Esercizio from './componentCondizional/esercizio1/Esercizio';
//import Eesercizio2 from './Esercizio2.2/Eesercizio2';
//import Employee from './employee/Employee';
//import Temperature from './temperatura/Temperature';
//import Student from './esoStudente/Student';
// import Product from './PopsIfElse/Product';
//import Car2 from './eso7/Car2';
//import Corso from './eso6/Corso';
// import Film3 from './propArrayJson/Film3';
//import Auto from './eso5/Auto';
//import Prodotto from './esercizio2/Prodotto';
//import Hotel from './esercizio3/Hotel';
//import Hotel2 from './eso4/Hotel2';

//import GiocoCard from './gioccoVideo/GiocoCard';
//import PersonnaStudent from './esercizo/PersonnaStudent';
// import Cliente from './esercizo/Cliente';
//import Prodotto from './esercizo/Prodotto';
//import Film from './array/Film';
//import Film from './propsfilm/Film';
//import VirtualDue from './propsfilm/VirtualDue';
//import Data from './Dinamic/Data';
//import Negozio from './negozio/Negozio';
//import Image from './negozio/Image';
//import Intro from './01.intro1/Intro';.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Form2/>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
