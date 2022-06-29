import {
    Routes,
    Route
} from 'react-router-dom';

import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamShow from './components/streams/StreamShow';
import StreamEdit from './components/streams/StreamEdit';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<StreamList />}></Route>
            <Route path="/streams/list" element={<StreamList />}></Route>
            <Route path="/streams/create" element={<StreamCreate />}></Route>
            <Route path="/streams/show/:id" element={<StreamShow />}></Route>
            <Route path="/streams/edit/:id" element={<StreamEdit />}></Route>
        </Routes>
    );
}