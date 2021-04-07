import { Fragment, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '@styles/theme';
import '@styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function Application({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Thomas Adams | Mansfield based Freeland Web Developer & Software Developer</title>
                <description>
                    Freelance Web Developer & Software Developer base in Mansfield, England. Highly experienced in
                    developing bespoke websites & software.
                </description>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

                <link
                    rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                />

                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    media="print"
                    onload="this.media='all'"
                />

                <noscript>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    />
                </noscript>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Fragment>
    );
}

export default Application;
