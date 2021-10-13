import React from 'react';
import Link from 'next/link';
import Page from '../components/Page';
import PaySlips from '../components/PaySlips';

/**
 * List of payslips page
 */
const PaySlipsPage = () =>
{
  const navLink = <Link href="/">« Back to generator</Link>;

  return (
    <Page title="Generated payslips" navLink={navLink}>
      <PaySlips/>
    </Page>
  );
};

export default PaySlipsPage;
