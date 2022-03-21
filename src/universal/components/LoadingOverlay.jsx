import React, { useEffect, useState } from 'react';
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

export default ({loading}) => {
    /**
     * Debounce for super fast queries
     * Also helps server side render match hydrated stated because
     * gql loading props are different server to client.
     */ 
    const [ shouldShowOverlay, setShouldShowOverlay ] = useState(false);
    let timer;
    useEffect(() => {
        if (loading) {
            timer = setTimeout(() => setShouldShowOverlay(true), 10);
        } else {
            setShouldShowOverlay(false);
            clearTimeout(timer);
            timer = null;
        }
        return (() => clearTimeout(timer));
    }, [loading]);
    return shouldShowOverlay ? (
        <Overlay>
            <LoaderContainer>
                <LoaderArcs />
            </LoaderContainer>
        </Overlay>
    ) : null;
};