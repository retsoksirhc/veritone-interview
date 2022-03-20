import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
    margin: 0 32px 32px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Input = styled.input`
    padding: 16px;
    border: 1px solid #d5dfe9;
    border-radius: 4px;
    margin: 8px 0;
    font-size: 0.9em;
    font-family: Nunito, sans-serif;
`;

const TextareaWrapper = styled.div`
    display: flex;
    position: relative;
    height: 116px;
    margin: 8px 0;
    font-size: 1em;
`;

const Textarea = styled.textarea`
    padding: 10px;
    border: 1px solid #d5dfe9;
    border-radius: 4px;
    flex-grow: 1;
    font-size: 0.9em;
    font-family: Nunito, sans-serif;
`;

const CharCounter = styled.p`
    position: absolute;
    bottom: 12px;
    right: 12px;
    background: #ffffff;
    font-size: 0.7em;
    color: #7d7a7a;
`;

const generateInputHandler = (setter, validation = () => true) => (e) => {
    const { value } = e.target;
    if (validation(value)) {
        setter(value);
    }
}



export default () => {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ count, setCount ] = useState(1);

    const nameInputHandler = generateInputHandler(setName);
    const descriptionInputHandler = generateInputHandler(setDescription, value => value.length <= 100);
    const countInputHandler = generateInputHandler(setCount);

    return (
        <FormWrapper>
            <Input type="text" placeholder="Item Name" value={name} onChange={nameInputHandler} />
            <TextareaWrapper>
                <Textarea placeholder="Description" value={description} onChange={descriptionInputHandler} />
                <CharCounter>{description.length}/100</CharCounter>
            </TextareaWrapper>
            <Input type="number" placeholder="How many?" min="1" value={count} onChange={countInputHandler} />
        </FormWrapper>
    );
};
