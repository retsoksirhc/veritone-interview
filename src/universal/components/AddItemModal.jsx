import React from 'react';
import { gql, useMutation } from '@apollo/client';

import ModalWrapper from './ModalWrapper';

const ADD_ITEM = gql`
    mutation($item: ListItemInput) {
        addItem(item: $item) {
            id
        }
    }
`;

export default ({ isModalOpen, toggleModal }) => {
    const [addItem, { data, loading, error }] = useMutation(ADD_ITEM);
    const handleButtonClick = (newItem) => addItem({ variables: { item: newItem } });

    return (
        <ModalWrapper
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            title="Add an Item"
            subtitle="Add your new item below"
            buttonText="Add Task"
            buttonAction={handleButtonClick}
        />
    );
};

