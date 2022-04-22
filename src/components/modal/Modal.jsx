import React from 'react';
import Dialog from '@mui/material/Dialog';

const Modal = ( { display, handleClose, children} ) => {

    return (
        <div>
            <Dialog  className='test' open={ display} onClose={ handleClose } >
                {/* children taken from CartDetail */}
                { children }
            </Dialog>
        </div>
    );
}

export default Modal;