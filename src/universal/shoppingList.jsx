import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    color: #fefefe;
    background: #4d81b7;
    font-family: 'Dosis', sans-serif;
    padding: 22px;
    font-size: 1.2em;
    font-weight: 500;
`

const EmptyList = styled.div`
    border: 1px solid #c6c6c6;
    max-width: 530px;
    margin: 64px auto;
    padding: 40px;
    text-align: center;
    border-radius: 4px;
    min-height: 210px;
    color: #87898c;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
`;

const AddFirstButton = styled.button`
    background: #1871e8;
    color: #ffffff;
    padding: 8px 16px;
    font-size: 0.9em;
    border: none;
    border-radius: 4px;
    &:hover {
        background: #0861d8;
    }
    &:active {
        background: #000000;
    }
    font-family: inherit;
`

const AddFirstCopy = styled.p`
    position: relative;
    transform: translateY(-2em);
    height: 0;
    font-size: 1.125em;
`;

export default () => (
    <>
        <Header>SHOPPING LIST</Header>
        <EmptyList>
            <div>
                <AddFirstCopy>Your shopping list is empty :(</AddFirstCopy>
                <AddFirstButton>Add your first item</AddFirstButton>
            </div>
        </EmptyList>
    </>
)