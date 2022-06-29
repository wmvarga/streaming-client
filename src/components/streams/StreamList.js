import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { 
    fetchStreams,
    deleteStream,
    openModal,
    closeModal,
    selectModalItem
} from '../../actions'
import Modal from '../Modal';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    onDeleteClick = () => {
        this.props.deleteStream(this.props.selectedModalItem.id);
    }

    actions = (
        <React.Fragment>
            <button className='ui button negative' onClick={this.onDeleteClick}>Delete</button>
        </React.Fragment>
    );

    onModalOpen = (item) => {
        this.props.selectModalItem(item);
        this.props.openModal();
    }

    renderAdmin(stream) {
        if (this.props.currentUserId === stream.userId) {
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
                    <button className='ui button negative' onClick={() => this.onModalOpen(stream)}>Delete</button>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/show/${stream.id}`}>{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: "right" }}>
                    <Link to="/streams/create" className='ui button primary'>Create Stream</Link>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
                {this.props.selectedModalItem ? <Modal header="Delete Stream" content={`Are you sure you want to delete stream "${this.props.selectedModalItem.title}"?`} actions={this.actions} withCancel /> : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
        selectedModalItem: state.modal.selectedItem
    };
}

export default connect(mapStateToProps, { fetchStreams, deleteStream, openModal, closeModal, selectModalItem })(StreamList);