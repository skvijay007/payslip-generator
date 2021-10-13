# Payslip Generator

In this application user can input pay data like Annual salary, Super rate, Payment start date etc. and on successfull validation Payslip will be generated and displayed in another page.
Payslips are calculated and generated based on the below tax table,

| Taxable income| Tax on this income           | 
| ------------- |:-------------:|
| 0 - $18,200      | Nil | 
| $18,201 - $37,000     | 19c for each $1 over $18,200      |  
| $37,001 - $80,000 | $3,572 plus 32.5c for each $1 over $37,000      | 
| $80,001 - $180,000 | $17,547 plus 37c for each $1 over $80,000      |    
| 180,001 and over | $54,547 plus 45c for each $1 over $180,000      |      


## Example inputs and outputs

### Example 1

#### Input

| First name | Last name | Annual salary | Super rate (%) | Payment start date |
| ---------- | --------- | ------------- | -------------- | ------------------ |
| David     | Rudd     | 60050         | 9              | March 1, 2021      |

#### Output

| Name         | Pay period          | Gross income | Income tax | Net income | Super amount |
| ------------ | ------------------- | ------------ | ---------- | ---------- | ------------ |
| David Rudd | 01 March – 31 March | 5004         | 922        | 4082       | 450          |

### Example 2

#### Input

| First name | Last name | Annual salary | Super rate (%) | Payment start date |
| ---------- | --------- | ------------- | -------------- | ------------------ |
| Ryan       | Chen       | 120000        | 10              | March 1, 2021      |

#### Output

| Name         | Pay period          | Gross income | Income tax | Net income | Super amount |
| ------------ | ------------------- | ------------ | ---------- | ---------- | ------------ |
| Ryan Chen     | 01 March – 31 March | 10000        | 2696       | 7304       | 1000          |

This application is using [Next.js](http://nextjs.org/) framework on top of [React](http://reactjs.org).

This applications is using the Next.JS architecture with intuitive page based routing system. 
The layout pages Income Form and Payslips Lists are located in the [pages](pages) directory.
The Pages subsequent components are located in the [components](components) directory.
Data has been shared between the components using global [React Context API](https://reactjs.org/docs/context.html).

## Starting this application

1. Install [Node.js](http://nodejs.org/en/).
3. Download the code using terminal
    ```bash
    git clone https://github.com/skvijay007/payslip-generator.git .
    ```
4. Install the dependencies
    ```bash
    npm install
    ```
5. Start the application
    ```bash
    npm run build
    npm run start
    ```
6. To start a development version of the application, run

    ```bash
    npm run dev
    ```
7. To test the application, run

    ```bash
    npm run test
    ```
6. Open http://localhost:3000 in your browser.
