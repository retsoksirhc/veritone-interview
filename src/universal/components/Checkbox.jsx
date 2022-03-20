import React from 'react';
import styled from 'styled-components';

const Checkbox = styled.div`
    color: #ffffff;
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 2px;
    background: ${props => props.completed ? "#4d81b7" : "#ffffff"};
    border-color: ${props => props.completed ? "#4d81b7" : "#c6c6c6"};
    cursor: pointer;
`;

const CheckMark = styled.div`
    visibility: ${props => props.completed ? "visible" : "hidden" };
`

export default ({ completed, toggleCompleted }) => (
    <Checkbox completed={completed} onClick={toggleCompleted}>
        <CheckMark className="material-icons md-16" completed={completed}>done</CheckMark>
    </Checkbox>
);