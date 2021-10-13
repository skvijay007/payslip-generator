import React from 'react';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

/**
 * Main application layout
 */
const Layout = ({title, navLink, children}) =>
{
  return (
    <Container>
        <Head>
            <title>{title}</title>
        </Head>
        <Grid container spacing={2} style={{borderBottom: 'solid 1px black', marginBottom: 20}}>
            <Grid item xs={8}>
                <h1>{title}</h1>
            </Grid>
            <Grid style={{display: 'flex', alignItems: 'center', textDecoration: 'underline', color: 'blue'}} item xs={4}>
                {navLink}
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    </Container>
  )
};

export default Layout;
