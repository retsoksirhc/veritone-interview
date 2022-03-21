import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import ModalWrapper from './ModalWrapper';
import GqlOps from '../gql/constants';
import LoadingOverlay from './LoadingOverlay';


export default ({ isModalOpen, toggleModal }) => {
    const [ addItem, { loading } ] = useMutation(GqlOps.ADD_ITEM, {
        refetchQueries: [
            GqlOps.GET_ITEMS
        ]
    });
    const handleButtonClick = (updatedItem) => {
        addItem({
            variables: { item: updatedItem },
            onCompleted: toggleModal
        });
    };

    return (
        <>
            <ModalWrapper
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
                title="Add an Item"
                subtitle="Add your new item below"
                buttonText="Add Task"
                buttonAction={handleButtonClick}
            />
            <LoadingOverlay loading={loading} />
        </>
    );
};

