import React from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';
import EditItemModal from './EditItemModal';

const ListItem = styled.li`
    border: ${props => props.completed ? "none" : "1px solid #d6d6d6"};
    border-radius: 4px;
    padding: 16px 16px 16px 0;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    min-width: 300px;
    background: ${props => props.completed ? "#f8fafc" : "#ffffff"};
`

const ItemInfo = styled.div`
    flex-grow: 1;
`;

const ItemName = styled.p`
    color: ${props => props.completed ? "#4d81b7" : "#000000"};
    text-decoration: ${props => props.completed ? "line-through" : "none"};
    line-height: 2em;
    font-weight: bold;
`;

const ItemDescription = styled.p`
    text-decoration: ${props => props.completed ? "line-through" : "none"};
    font-size: 0.9em;
    color: #7d7a7a;
`;

const Controls = styled.div`
    > div {
        margin: 12px;
        color: #555f7c;
        cursor: pointer;
    }
`;

const CompletedCheckbox = styled(Checkbox)`
    margin: 0 20px;
`;

export default ({ name, description, completed, count, id }) => {
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
    const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);
    const item = {
        name,
        description,
        completed,
        count,
        id
    }
    return (
        <ListItem completed={completed}>
            <CompletedCheckbox completed={completed}>
                {completed && (
                    <div className="material-icons md-16">done</div>
                ) }
            </CompletedCheckbox>
            <ItemInfo>
                <ItemName  completed={completed}>{name}</ItemName>
                <ItemDescription completed={completed}>{description}</ItemDescription>
            </ItemInfo>
            <Controls>
                <div className="material-icons-outlined" onClick={toggleEditModal}>edit</div>
                <div className="material-icons-outlined">delete</div>
            </Controls>
            <EditItemModal isModalOpen={isEditModalOpen} toggleModal={toggleEditModal} item={item}/>
        </ListItem>
    );
            };
