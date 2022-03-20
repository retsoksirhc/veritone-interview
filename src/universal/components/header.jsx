import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: ${props => props.isModal ? '#5c6269' : '#fefefe'};
    background: ${props => props.isModal ? '#fafafa' : '#4d81b7'};
    font-family: 'Dosis', sans-serif;
    padding: 22px;
    font-size: 1.2em;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    border-bottom: ${props => props.isModal ? '1px solid #d5dfe9;' : 'none'};
`

const Icon = styled.div`
    text-align: right;
    cursor: pointer;
`;

export default ({ isModal, toggleModal }) => (
    <Wrapper isModal={isModal}>
        SHOPPING LIST
        {isModal && <Icon className="material-icons-outlined" onClick={toggleModal}>last_page</Icon>}
    </Wrapper>
);