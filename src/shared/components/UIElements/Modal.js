import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransition from 'react-transition-group';

import BackDrop from './BackDrop';
import './Modal.css';

const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.contentClass}`}>

            </header>
        </div>
    );

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
    return <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} className='modal'>
            <ModalOverlay {...props}/>
        </CSSTransition>
    </React.Fragment>
}

export default Modak;
