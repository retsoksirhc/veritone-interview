import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    background: #ffffffcc;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

const LoaderContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
`;

const LoaderArcs = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    border-radius: 100%;
    border: 3px solid #4d81b7;
    border-top: 3px solid transparent;
    animation: spin 1.5s linear infinite;
`;

export default () => (
    <Overlay>
        <LoaderContainer>
            <LoaderArcs />
        </LoaderContainer>
    </Overlay>
)