import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const AppLayout = () => {
    return (
        <div>
            <div>
                <Header />
                <Outlet /> 
            </div>
            <Footer />
        </div>
    );
};

export default AppLayout;
