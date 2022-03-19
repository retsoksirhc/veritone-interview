import React from 'react';
import styled from 'styled-components';

const EmptyList = styled.div`
    border: 1px solid #c6c6c6;
    max-width: 530px;
    margin: 108px auto;
    padding: 40px;
    text-align: center;
    border-radius: 4px;
    min-height: 210px;
    color: #87898c;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
`;

const AddFirstItemButton = styled.button`
    background: #1871e8;
    color: #ffffff;
    padding: 8px 16px;
    font-size: 0.9em;
    border: none;
    border-radius: 4px;
    &:hover {
        background: #0861d8;
    }
    &:active {
        background: #000000;
    }
    font-family: inherit;
`

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
            <AddFirstItemButton>Add your first item</AddFirstItemButton>
        </div>
    </EmptyList>
);
