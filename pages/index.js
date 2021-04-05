import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
    return (
        <>
            <Header title="Welcome to my app!" />
            <p className="description">
                Get started by editing <code>pages/index.js</code>
            </p>
        </>
    );
}
