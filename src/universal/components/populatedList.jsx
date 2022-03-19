import React from 'react';
import styled from 'styled-components';

import ListControls from './listControls';
import ListItem from './listItem';

const Container = styled.div`
    font-family: 'Nunito', sans-serif;
    margin: 36px 88px 40px 164px;
`;

const List = styled.ul`
    margin-top: 16px;
`;


export default ({listItems}) => (
    <Container>
        <ListControls />
        <List>
            {listItems.map(listItem => <ListItem listItem={listItem} />)}
        </List>
    </Container>
);
