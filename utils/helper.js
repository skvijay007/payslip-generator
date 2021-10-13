import moment from 'moment';

/**
 * Converts form values to an payslip data object
 **/
 const formDataTransformer = values =>
 {
   return {
     firstName: values.firstName.trim(),
     lastName: values.lastName.trim(),
     annualSalary: Number(values.annualSalary),
     superRate: Number(values.superRate.trim()),
     paymentDate: moment(values.paymentDate)
   };
 };
 
 export { formDataTransformer };