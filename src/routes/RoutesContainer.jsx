import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../components/Layout/LandingPage';

const RoutesContainer = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
        </div>
    )
};

export default RoutesContainer;