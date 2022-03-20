import React from 'react';
import { gql, useMutation } from '@apollo/client';

import ModalWrapper from './ModalWrapper';

const UPDATE_ITEM = gql`
    mutation($id: ID! $item: ListItemInput) {
        updateItem(id: $id item: $item) {
            id
        }
    }
`;

export default (props) => {
    const { isModalOpen, toggleModal, item } = props;
    const [editItem, { data, loading, error }] = useMutation(UPDATE_ITEM);
    const handleButtonClick = (updatedItem) => {
        editItem({ variables: { id: item.id, item: updatedItem } });
    };
    return (
        <ModalWrapper
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            title="Edit an Item"
            subtitle="Edit your item below"
            buttonText="Save Item"
            buttonAction={handleButtonClick}
            item={item}
            isCompletedEnabled={true}
        />
    );
};
