import React from 'react';
import { useMutation } from '@apollo/client';

import ModalWrapper from './ModalWrapper';
import GqlOps from '../gql/constants';

export default ({ isModalOpen, toggleModal, item }) => {
    const [ deleteItem ] = useMutation(GqlOps.DELETE_ITEM, {
        refetchQueries: [
            GqlOps.GET_ITEMS
        ]
    });
    const handleButtonClick = () => {
        deleteItem({ variables: { id: item.id } });
        toggleModal();
    };
    return (
        <ModalWrapper
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            title="Delete Item?"
            subtitle="Are you sure you want to delete this item? This can not be undone"
            buttonText="Delete"
            buttonAction={handleButtonClick}
            isDelete
        />
    );
};
