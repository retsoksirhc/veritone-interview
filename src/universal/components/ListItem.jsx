import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import Checkbox from './Checkbox';
import EditItemModal from './EditItemModal';
import DeleteItemModal from './DeleteItemModal';
import GqlOps from '../gql/constants';
import LoadingOverlay from './LoadingOverlay';

const ListItem = styled.li`
    border: ${props => props.completed ? "1px solid transparent" : "1px solid #d6d6d6"};
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
    line-height: 1.25em;
    font-weight: bold;
    word-break: break-word;
    margin-bottom: 0.75em;
`;

const ItemDescription = styled.p`
    text-decoration: ${props => props.completed ? "line-through" : "none"};
    font-size: 0.9em;
    color: #7d7a7a;
    word-break: break-word;
`;

const Controls = styled.div`
    min-width: 96px; /* prevents edit and delete icons from stacking */
    > div {
        margin: 12px;
        color: #555f7c;
        cursor: pointer;
    }
`;

const CheckboxWrapper = styled.div`
margin: 0 20px;
`;

export default ({ name, description, completed, count, id }) => {
    const [ isEditModalOpen, setIsEditModalOpen ] = React.useState(false);
    const [ isDeleteModalOpen, setIsDeleteModalOpen ] = React.useState(false);
    const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);
    const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

    const [ editItem, { loading } ] = useMutation(GqlOps.UPDATE_ITEM, {
        refetchQueries: [
            GqlOps.GET_ITEMS
        ]
    });

    const toggleCompleted = () => {
        editItem({
            variables: {
                id: item.id,
                item: {
                    name,
                    description,
                    count,
                    id,
                    completed: !completed
                }
            }
        });
    }

    const item = {
        name,
        description,
        completed,
        count,
        id
    }
    return (
        <>
            <ListItem completed={completed}>
                <CheckboxWrapper>
                    <Checkbox completed={completed} toggleCompleted={toggleCompleted} />
                </CheckboxWrapper>

                <ItemInfo>
                    <ItemName  completed={completed}>{name}</ItemName>
                    <ItemDescription completed={completed}>{description}</ItemDescription>
                </ItemInfo>
                <Controls>
                    <div className="material-icons-outlined" onClick={toggleEditModal}>edit</div>
                    <div className="material-icons-outlined" onClick={toggleDeleteModal}>delete</div>
                </Controls>
                <EditItemModal isModalOpen={isEditModalOpen} toggleModal={toggleEditModal} item={item} />
                <DeleteItemModal isModalOpen={isDeleteModalOpen} toggleModal={toggleDeleteModal} item={item} />
            </ListItem>
            <LoadingOverlay loading={loading} />
        </>

    );
            };
