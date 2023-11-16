import React from 'react';
import Header from './Header';
import Pageheader from './Pageheader';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="page-wrapper">
                <Pageheader />
                <div className="page-body">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
