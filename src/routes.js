import {
    Routes,
    Route
} from 'react-router-dom';

import StreamList from './components/streams/StreamList';
import StreamCreate from './components/streams/StreamCreate';
import StreamShow from './components/streams/StreamShow';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<StreamList />}></Route>
            <Route path="/streams/list" element={<StreamList />}></Route>
            <Route path="/streams/create" element={<StreamCreate />}></Route>
            <Route path="/streams/show" element={<StreamShow />}></Route>
            <Route path="/streams/edit" element={<StreamEdit />}></Route>
            <Route path="/streams/delete" element={<StreamDelete />}></Route>
        </Routes>
    );
}