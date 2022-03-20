import React from 'react';
import styled from 'styled-components';

export default styled.div`
    margin: 0 20px;
    color: #ffffff;
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 2px;
    background: ${props => props.completed ? "#4d81b7" : "#ffffff"};
    border-color: ${props => props.completed ? "#4d81b7" : "#c6c6c6"};
    cursor: pointer;
`;