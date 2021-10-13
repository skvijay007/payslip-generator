/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen, fireEvent } from '@testing-library/react'
 import "@testing-library/jest-dom";
 import PaySlips from '../pages/payslips'
 import GlobalContext from '../contexts/GlobalContext';
 
 describe('Home', () => {
    const renderWithContext = (args = {}) => {
        return render(
          <GlobalContext.Provider value={{paySlips: args?.paySlips}}>
            <PaySlips />
          </GlobalContext.Provider>
        );
    }
    
   it('Should render properly', () => {
     renderWithContext();
     const heading = screen.getByRole('heading', {
       name: /Generated Payslips/i,
     })
     expect(heading).toBeInTheDocument();
   })
   
   it('Should render table with payslips', () => {
    const payslipsFixture = [{"name":"David Rudd","grossIncome":5004,"incomeTax":922,"netIncome":4082,"superAmount":450,"id":"882c907e-f4b5-487f-aa54-e5697d9e0e33"}];
    renderWithContext({paySlips: payslipsFixture});
    expect(screen.getByTestId('payslip-table')).toBeInTheDocument();
  })
 })