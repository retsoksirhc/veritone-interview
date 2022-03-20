import React from 'react';

import ModalWrapper from './ModalWrapper';

export default (props) => {
    const { isModalOpen, toggleModal, item } = props;
    return (
        <ModalWrapper
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            title="Edit an Item"
            subtitle="Edit your item below"
            buttonText="Save Item"
            item={item}
            isCompletedEnabled={true}
        />
    );
};
