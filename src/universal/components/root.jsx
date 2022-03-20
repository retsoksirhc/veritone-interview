import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Header from './Header';
import EmptyList from './EmptyList';
import PopulatedList from './PopulatedList';

const GET_ITEMS = gql`
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

export default () => {
    const { loading, error, data } = useQuery(GET_ITEMS);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error! {error.message}</div>;
    }

    const listItems = data.getItems;

    const ListComponent = listItems && listItems.length > 0 ? PopulatedList : EmptyList
    return (
        <>
            <Header>SHOPPING LIST</Header>
            <ListComponent listItems={listItems} />
        </>
    );
}