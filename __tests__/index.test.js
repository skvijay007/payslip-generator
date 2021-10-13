/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen, fireEvent, waitFor } from '@testing-library/react'
 import "@testing-library/jest-dom";
 import Home from '../pages/index'
 import GlobalContext from '../contexts/GlobalContext';
 import Router from 'next/router';

 jest.mock('next/router', ()=> ({push: jest.fn()}));
 
 describe('Home', () => {
    const renderWithContext = (props = {}) => {
        return render(
          <GlobalContext.Provider value={{addPaySlip: props?.addPaySlip}}>
            <Home onSubmitHandler={props?.onSubmitHandler} />
          </GlobalContext.Provider>
        );
    }
    
   it('Should render properly', () => {
     renderWithContext();
     const heading = screen.getByRole('heading', {
       name: /Payslip calculator/i,
     })
     expect(heading).toBeInTheDocument();
   })
   
   it('Should throw empty field error on clicking generate button', async () => {
        renderWithContext();
        const generateButton = screen.getByTestId('generate-button');
        expect(generateButton).toBeInTheDocument();
        fireEvent.submit(generateButton);
        expect(await screen.findByTestId('firstname-error')).toBeInTheDocument();
    })
    
    it('Should call add payslip when all the fields are filled', async () => {
        const addPaySlip = jest.fn();
        const onSubmitHandler = jest.fn();
        renderWithContext({addPaySlip, onSubmitHandler});
        
        fireEvent.input(screen.getByTestId("firstname-input"), {
            target: {
              value:
                "David"
            }
        });
        fireEvent.input(screen.getByTestId("lastname-input"), {
            target: {
              value:
                "Rudd"
            }
        });
        fireEvent.input(screen.getByTestId("annual-salary-input"), {
            target: {
              value:
                60050
            }
        });
        fireEvent.input(screen.getByTestId("super-input"), {
            target: {
              value:
                9
            }
        });
        fireEvent.input(screen.getByTestId("pay-date-input"), {
            target: {
              value:
                "2021-03-01"
            }
        });
        fireEvent.submit(screen.getByTestId('generate-button'));
        
        await waitFor(() =>
            expect(addPaySlip).toHaveBeenCalled()
        );
        expect(Router.push).toHaveBeenCalledWith('/payslips')
    })
 })