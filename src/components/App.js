import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import MainRoutes from '../routes';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <HistoryRouter history={history}>
            <div className='ui container'>
                <Header />
                <MainRoutes />
            </div>
        </HistoryRouter>
    );
}

export default App;