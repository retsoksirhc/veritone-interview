import React from 'react';
import { useMutation } from '@apollo/client'
import ModalWrapper from './ModalWrapper';
import GqlOps from '../gql/constants';
import LoadingOverlay from './LoadingOverlay';

export default (props) => {
    const { isModalOpen, toggleModal, item } = props;
    const [ editItem, { loading } ] = useMutation(GqlOps.UPDATE_ITEM, {
        refetchQueries: [
            GqlOps.GET_ITEMS
        ]
    });
    const handleButtonClick = (updatedItem) => {
        editItem({
            variables: { id: item.id, item: updatedItem },
            onCompleted: toggleModal
        });
    };
    return (
        <>
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
            <LoadingOverlay loading={loading} />
        </>

    );
};
