import React, { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import Header from './Header';
import Button from './Button';
import ItemForm from './ItemForm';

const Title = styled.h2`
    font-size: ${props => props.isDelete ? "1.1em" : "1em"};
    font-weight: 400;
    margin: 28px 32px 8px;
`;

const Description = styled.p`
    font-size: ${props => props.isDelete ? "0.8em" : "0.9em"};
    font-weight: 300;
    margin: 8px 32px;
    line-height: 1.5em;
`;

const Controls = styled.div`
    font-size: 1em;
    text-align: right;
    margin: auto 32px 32px;
`

const BorderlessButton = styled(Button)`
    border: none;
    margin: 0 4px;
`;

export default (props) => {
    const { isModalOpen, toggleModal, title, subtitle, buttonText, buttonAction, item, isCompletedEnabled, isDelete } = props;
    const [ updatedItem, setUpdatedItem ] = useState(item || {});
    const buttonClickHandler = () => {
        buttonAction(updatedItem);
    };
    ReactModal.setAppElement('body');
    return (
        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            style={{
                content: {
                    width: '100%',
                    maxWidth: isDelete ? '408px' : '450px',
                    maxHeight: isDelete ? '248px' : '600px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0',
                    borderRadius: isDelete ? '4px' : '0',
                    boxShadow: '0 0 10px 0 #a0a0a0',
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'Nunito, sans-serif',
                    fontSize: '1.1em',
                    borderBottom: isDelete ? 'none' : '4px solid #4d81b7'
                }
            }}
        >
            {!isDelete && (<Header isModal toggleModal={toggleModal} />)}
            <Title isDelete={isDelete}>{title}</Title>
            <Description isDelete={isDelete}>{subtitle}</Description>
            {!isDelete && (<ItemForm item={item} isCompletedEnabled={isCompletedEnabled} onUpdate={setUpdatedItem} />)}
            <Controls>
                <BorderlessButton onClick={toggleModal}>Cancel</BorderlessButton>
                <Button primary onClick={buttonClickHandler} disabled={!updatedItem.name}>{buttonText}</Button>
            </Controls>
        </ReactModal>
    );
};

