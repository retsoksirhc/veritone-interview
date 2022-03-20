import React from 'react';
import styled from 'styled-components';

import AddItemButton from './AddItemButton';

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 1.15em;
    font-weight: bold;
`;

export default () => (
    <Controls>
        <p>Your Items</p>
        <AddItemButton isListEmpty={false}>Add Item</AddItemButton>
    </Controls>
)
