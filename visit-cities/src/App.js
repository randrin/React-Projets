import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import CityList from './components/cityList/cityList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CityList />
    </React.Fragment>
  );
}

export default App;
