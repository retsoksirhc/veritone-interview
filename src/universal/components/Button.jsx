import React from 'react';
import styled from 'styled-components';

export default styled.button`
    background: ${props => props.primary ? "#1871e8;" : "#ffffff"};
    color: ${props => props.primary ? "#ffffff" : "#000000"};
    padding: 8px 16px;
    font-size: ${props => props.isListEmpty ? "0.9em" : "0.75em"};
    border: none;
    border-radius: 4px;
    &:hover {
        background: ${props => props.primary ? "#0861d8;" : "#dddddd"};
    }
    &:active {
        background: ${props => props.primary ? "#3891ff;" : "#999999"};
    }
    font-family: inherit;
    cursor: pointer;
`;