/* eslint-disable react/display-name */
import React from 'react';
import Router from 'next/router'
import Link from 'next/link';
import Page from '../components/Page';
import IncomeForm from '../components/IncomeForm';

/**
 * Home page with the income filling form
 */
const Home = () => {
  const navLink = <Link href="/payslips">View all payslips</Link>;

  return (
    <Page title="Payslip calculator" navLink={navLink}>
      <IncomeForm onSubmitHandler={() => Router.push('/payslips')} />
    </Page>
  );
};

export default Home;

