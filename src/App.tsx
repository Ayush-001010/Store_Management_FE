import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import IApp from './IApp';
import { useSelector } from "react-redux";

const App : React.FC<IApp> = () => {

  console.log("App Rendered ", useSelector(state => state));
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<div className='bg-black'>Store Management Application</div>} />
      </Routes>
    </HashRouter>
  ) 
}

export default App;