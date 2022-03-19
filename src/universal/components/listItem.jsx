import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    border: 1px solid #c6c6c6;
    border-radius: 4px;
    padding: 16px;
`

export default ({listItem}) => (
    <ListItem>
        <p>{listItem.name}</p>
    </ListItem>
)
