import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from './Form';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 2,
    borderRadius: 3,
    width: '450px'
};

const BasicModal = ({ text }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button
                onClick={handleOpen}
                className='p-2 rounded-lg font-medium text-white bg-orange-500 hover:bg-orange-600'
            >
                {text}
            </button>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='bg-slate-400'
            >
                <Box sx={style}>
                    <div className='flex items-center justify-end w-full'>
                        <button onClick={handleClose} className='text-2xl rounded-full size-[40px] bg-red-500 text-white font-medium'>X</button>
                    </div>
                    <Form type={text}/>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal;
