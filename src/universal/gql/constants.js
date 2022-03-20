import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
    query {
        getItems {
            id
            name
            description
            count
            completed
        }
    }
`;

export const UPDATE_ITEM = gql`
    mutation($id: ID! $item: ListItemInput) {
        updateItem(id: $id item: $item) {
            id
        }
    }
`;

export const ADD_ITEM = gql`
mutation($item: ListItemInput) {
    addItem(item: $item) {
        id
    }
}
`;

export const DELETE_ITEM = gql`
    mutation($id: ID!) {
        deleteItem(id: $id) {
            id
        }
    }
`;

export default {
    GET_ITEMS,
    UPDATE_ITEM,
    ADD_ITEM,
    DELETE_ITEM
};
