import _ from 'lodash';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import StreamForm from './StreamForm';
import { fetchStream, editStream } from "../../actions";

const StreamEdit = (props) => {
    const { id } = useParams();
    const stream = useSelector((state) => state.streams[id]);

    useEffect(() => {
        if (!stream) {
            props.fetchStream(id);
        }
    }, [stream, id, props]);

    const onSubmit = (formValues) => {
        props.editStream(id, formValues);
    }

    if (!stream) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm onSubmit={onSubmit} initialValues={_.pick(stream, 'title', 'description')} />
        </div>
    );
}

export default connect(null, { fetchStream, editStream })(StreamEdit);