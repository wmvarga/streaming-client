import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../actions';

const Modal = ({ header, content, actions, withCancel }) => {
    const isModalOpen = useSelector((state) => state.modal.isOpen);
    const dispatch = useDispatch();

    const onModalClose = () => {
        dispatch(closeModal());
    }
    
    let modalClass = "";
    isModalOpen ? modalClass = "visible active" : modalClass = "";

    return (
        ReactDOM.createPortal(
            <div className={`ui dimmer modals ${modalClass}`} onClick={onModalClose}>
                <div className={`ui modal ${modalClass}`} onClick={(e) => e.stopPropagation()}>
                    <i className="close icon" onClick={onModalClose}></i>
                    <div className='header'>{header}</div>
                    <div className='content'>{content}</div>
                    {actions ? (
                        <div className='actions'>
                            {withCancel ? <button className='ui button' onClick={onModalClose}>Cancel</button> : null}
                            {actions}
                        </div>
                    ) : null}
                </div>
            </div>,
            document.querySelector('#modal')
        )
    );
}

export default Modal;