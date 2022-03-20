import React from 'react';

import AddItemModal from './AddItemModal';
import Button from './Button';

export default ({isListEmpty, children}) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    return (
        <>
            <Button primary isListEmpty={isListEmpty} onClick={toggleModal}>
                {children}
            </Button>
            <AddItemModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
        </>
    );
}