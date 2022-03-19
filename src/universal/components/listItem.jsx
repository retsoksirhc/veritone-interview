import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    padding: 16px 16px 16px 0;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    min-width: 300px;
`

const ItemInfo = styled.div`
    flex-grow: 1;
`;

const Checkbox = styled.input`
    margin: 0 20px;
`;

const ItemName = styled.p`
    color: #000000;
    line-height: 2em;
    font-weight: bold;
`;

const ItemDescription = styled.p`
    font-size: 0.9em;
    color: #9c9c9c;
`;

export default ({listItem}) => (
    <ListItem>
        <Checkbox type="checkbox" />
        <ItemInfo>
            <ItemName>{listItem.name}</ItemName>
            <ItemDescription>{listItem.description}</ItemDescription>
        </ItemInfo>
        <div>
            <div className="material-icons-outlined">edit</div>
            <div className="material-icons-outlined">delete</div>
        </div>
    </ListItem>
)
