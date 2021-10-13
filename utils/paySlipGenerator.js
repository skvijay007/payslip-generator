import moment from 'moment';
import first from 'lodash/fp/first';

/**
 * Taxes table for pay slip calculation
 */
 const taxTable = [
    {
      maxIncome: 18200,
      taxStartIncome: 0,
      taxStartAmount: 0,
      taxRate: 0
    },
    {
      maxIncome: 37000,
      taxStartIncome: 18200,
      taxStartAmount: 0,
      taxRate: 0.19
    },
    {
      maxIncome: 80000,
      taxStartIncome: 37000,
      taxStartAmount: 3572,
      taxRate: 0.325
    },
    {
      maxIncome: 180000,
      taxStartIncome: 80000,
      taxStartAmount: 17547,
      taxRate: 0.37
    },
    {
      maxIncome: null,
      taxStartIncome: 180000,
      taxStartAmount: 54547,
      taxRate: 0.45
    }
];

/**
 * Tax amount for an income
 **/
 const getIncomeTax = (income) =>
 {
   const {taxStartAmount, taxStartIncome, taxRate} = first(taxTable.filter(tax => tax.maxIncome === null || income <= tax.maxIncome));
   return taxStartAmount + (income - taxStartIncome) * taxRate;
 };


/**
 * @typedef {{}} Payslip
 * @property {string} name user name
 * @property {moment.Moment} payPeriodStart Pay period start
 * @property {moment.Moment} payPeriodEnd Pay period end
 * @property {number} grossIncome Gross income
 * @property {number} incomeTax Income tax
 * @property {number} netIncome Net income
 * @property {number} superAmount Super amount
 */

/**
 * Generates a payslip
 *
 * @param {string} firstName First name
 * @param {string} lastName Last name
 * @param {number} annualSalary Annual salary
 * @param {number} superRate Super rate
 * @param {moment.Moment} paymentDate Payment start date
 * @return {Payslip}
 */
 const generatePayslip = ({
    firstName,
    lastName,
    annualSalary,
    superRate,
    paymentDate
  }) => {
    const monthlyIncome = Math.round(annualSalary / 12);
    const annualTax = getIncomeTax(annualSalary);
    const monthlyTax = Math.round(annualTax / 12);
    return {
      name: `${firstName} ${lastName}`,
      payPeriodStart: paymentDate,
      payPeriodEnd: moment(paymentDate).add(1, 'months').subtract(1, 'day'),
      grossIncome: monthlyIncome,
      incomeTax: monthlyTax,
      netIncome: monthlyIncome - monthlyTax,
      superAmount: Math.round(monthlyIncome * superRate / 100)
    };
};

export default generatePayslip;