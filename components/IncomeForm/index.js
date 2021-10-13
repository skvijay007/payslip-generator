/* eslint-disable react/display-name */
import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GlobalContext from '../../contexts/GlobalContext';
import generatePayslip from '../../utils/paySlipGenerator';
import { formDataTransformer } from '../../utils/helper';

/**
 * A form to fill Income information.
 *
 * When the form is submitted, payslip is generated and added to the global context.
 */
const IncomeForm = ({onSubmitHandler}) => {
    const {addPaySlip} = useContext(GlobalContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
      
      const onSubmit = data => {
        const payData = formDataTransformer(data);
        const payslip = generatePayslip(payData);
        addPaySlip(payslip);
        reset();
        onSubmitHandler();
      };
    
      return (
          <Container maxWidth="sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <label>First Name</label>
                        <input
                            {...register("firstName", {
                            required: true,
                            pattern: /^[A-Za-z]+$/i
                            })}
                            data-testid="firstname-input"
                        />
                        {errors?.firstName?.type === "required" && <p data-testid="firstname-error" className="error">First name field is required</p>}
                        {errors?.firstName?.type === "pattern" && (
                            <p data-testid="firstname-error" className="error">Alphabetical characters only</p>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <label>Last Name</label>
                        <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} data-testid="lastname-input" />
                        {errors?.lastName?.type === "required" && <p data-testid="lastname-error" className="error">Last name is required</p>}
                        {errors?.lastName?.type === "pattern" && (<p data-testid="lastname-error" className="error">Alphabetical characters only</p>)}
                    </Grid>
                    <Grid item xs={4}>
                        <label>Annual salary</label>
                        <input type="number" {...register("annualSalary", { required: true, min: 0, valueAsNumber: true })} data-testid="annual-salary-input" />
                        {errors?.annualSalary?.type === "required" ? 
                            <p data-testid="annual-salary-error" className="error">Annual salary is required</p>
                                : errors?.annualSalary ? 
                                    <p data-testid="annual-salary-error" className="error">Incorrect annual salary</p>
                                     : null }
                    </Grid>
                    <Grid item xs={4}>
                        <label>Super rate%</label>
                        <input {...register("superRate", { required: true, min: 0, max: 50})} data-testid="super-input" />
                        {errors?.superRate && (
                            <p data-testid="super-error" className="error">Super rate should be between 0 - 50</p>
                        )}
                    </Grid>
                    <Grid item xs={4}>
                        <label>Payment start date</label>
                        <input type="date" {...register("paymentDate", { required: true })} data-testid="pay-date-input" />
                        {errors?.paymentDate?.type === "required" && (
                            <p data-testid="pay-date-error" className="error">The payment start date is not specified</p>
                        )}
                    </Grid>
                </Grid>
                <input style={{marginTop: 20}} data-testid="generate-button" type="submit" value="Generate" />
            </form>
        </Container>
      );
};

export default IncomeForm;