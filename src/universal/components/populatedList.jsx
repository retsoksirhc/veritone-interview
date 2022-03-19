import React from 'react';
import styled from 'styled-components';

import ListControls from './listControls';
import ListItem from './listItem';

const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    margin: 36px 88px 40px 164px;
    max-width: 1024px;
`;

const List = styled.ul`
    margin-top: 12px;
`;


export default ({listItems}) => (
    <Container>
        <ListControls />
        <List>
            {listItems.map(listItem => <ListItem {...listItem} key={listItem.id} />)}
        </List>
    </Container>
);
