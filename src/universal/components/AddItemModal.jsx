import React from 'react';

import ModalWrapper from './ModalWrapper';

export default ({ isModalOpen, toggleModal }) => (
    <ModalWrapper
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        title="Add an Item"
        subtitle="Add your new item below"
        buttonText="Add Task"
    />
);
