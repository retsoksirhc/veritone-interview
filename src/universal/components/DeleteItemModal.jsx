import React from 'react';

import ModalWrapper from './ModalWrapper';

export default ({ isModalOpen, toggleModal }) => (
    <ModalWrapper
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        title="Delete Item?"
        subtitle="Are you sure you want to delete this item? This can not be undone"
        buttonText="Delete"
        isDelete
    />
);
