import React from 'react';
import styled from 'styled-components';

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 1.15em;
    font-weight: bold;
`;

const AddItemButton = styled.button`
    background: #1871e8;
    color: #ffffff;
    padding: 8px 16px;
    font-size: 0.75em;
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

export default () => (
    <Controls>
        <p>Your Items</p>
        <AddItemButton>Add Item</AddItemButton>
    </Controls>
)
