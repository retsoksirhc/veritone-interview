import React from 'react';
import { useMutation } from '@apollo/client'
import ModalWrapper from './ModalWrapper';
import GqlOps from '../gql/constants';

export default (props) => {
    const { isModalOpen, toggleModal, item } = props;
    const [ editItem ] = useMutation(GqlOps.UPDATE_ITEM, {
        refetchQueries: [
            GqlOps.GET_ITEMS
        ]
    });
    const handleButtonClick = (updatedItem) => {
        editItem({ variables: { id: item.id, item: updatedItem } });
        toggleModal();
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
