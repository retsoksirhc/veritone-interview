import React from 'react';

import Header from './header';
import EmptyList from './emptyList';
import PopulatedList from './populatedList';

const listItems = [
    {
        name: 'Test Item',
        description: 'Test item description',
        count: 1,
        id: '11111'
    },
    {
        name: 'Test Item 2',
        description: 'Test item 2 description',
        count: 2,
        id: '22222'
    },
    {
        name: 'Test Item 3',
        description: 'Test item 3 description',
        count: 3,
        id: '33333'
    },
    {
        name: 'Test Item 4',
        description: 'Test item 4 description',
        count: 4,
        id: '44444'
    }
];

export default () => {
    const ListComponent = listItems && listItems.length > 0 ? PopulatedList : EmptyList
    return (
        <>
            <Header>SHOPPING LIST</Header>
            <ListComponent listItems={listItems} />
        </>
    );
}