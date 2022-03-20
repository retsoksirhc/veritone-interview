import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

import Header from './Header';
import Button from './Button';
import ItemForm from './ItemForm';

const Title = styled.h2`
    font-size: 1em;
    font-weight: 400;
    margin: 28px 32px 8px;
`;

const Description = styled.p`
    font-size: 0.9em;
    font-weight: 300;
    margin: 8px 32px;
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

export default ({ isModalOpen, toggleModal, title, subtitle, buttonText, item, isCompletedEnabled }) => (
    <ReactModal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        style={{
            content: {
                width: '100%',
                maxWidth: '450px',
                maxHeight: '600px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '0',
                borderRadius: '0',
                boxShadow: '0 0 10px 0 #a0a0a0',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Nunito, sans-serif',
                fontSize: '1.1em',
                borderBottom: '4px solid #4d81b7'
            }
        }}
    >
        <Header isModal toggleModal={toggleModal} />
        <Title>{title}</Title>
        <Description>{subtitle}</Description>
        <ItemForm item={item} isCompletedEnabled={isCompletedEnabled} />
        <Controls>
            <BorderlessButton onClick={toggleModal}>Cancel</BorderlessButton>
            <Button primary>{buttonText}</Button>
        </Controls>
    </ReactModal>
);
