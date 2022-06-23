import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRoutes from '../routes';
import Header from './Header';

const App = () => {
    return (
        <BrowserRouter>
            <div className='ui container'>
                <Header />
                <MainRoutes />
            </div>
        </BrowserRouter>
    );
}

export default App;