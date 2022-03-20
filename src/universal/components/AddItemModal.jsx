import React from 'react';
import { gql, useMutation } from '@apollo/client';

import ModalWrapper from './ModalWrapper';
import GqlOps from '../gql/constants';


export default ({ isModalOpen, toggleModal }) => {
    const [ addItem ] = useMutation(GqlOps.ADD_ITEM, {
        refetchQueries: [
            GqlOps.GET_ITEMS
        ]
    });
    const handleButtonClick = (updatedItem) => {
        addItem({ variables: { item: updatedItem } });
        toggleModal();
    };

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

