import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/globals.css';
import GlobalContext from '../contexts/GlobalContext';

function MyApp({ Component, pageProps }) {
  const [paySlips, setPaySlips] = useState([]);

  /**
   * Adds a new payslip to the payslips list
   **/
  const addPaySlip = (payslip) =>
  {

    const payslips = [
      {...payslip, id: uuidv4()},
      ...paySlips
    ];

    setPaySlips(payslips);
  };
  
  const contextValue = {
    paySlips: paySlips,
    addPaySlip: addPaySlip
  };
  
  return (
      <GlobalContext.Provider value={contextValue}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
  );
}

export default MyApp
