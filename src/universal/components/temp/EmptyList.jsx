import React from 'react';
import styled from 'styled-components';

import AddItemButton from './AddItemButton';

const EmptyList = styled.div`
    border: 1px solid #c6c6c6;
    max-width: 530px;
    margin: 108px 88px;
    padding: 40px;
    text-align: center;
    border-radius: 4px;
    min-height: 210px;
    color: #87898c;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;

    @media (min-width: 800px) {
        margin: 108px auto;
    }
`;

const AddFirstItemCopy = styled.p`
    position: relative;
    transform: translateY(-2em);
    height: 0;
    font-size: 1.125em;
`;

export default () => (
    <EmptyList>
        <div>
            <AddFirstItemCopy>Your shopping list is empty :(</AddFirstItemCopy>
            <AddItemButton isListEmpty={true}>Add your first item</AddItemButton>
        </div>
    </EmptyList>
);
