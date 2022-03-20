import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';

const MAX_COUNT = 99;

const FormWrapper = styled.div`
    margin: 0 32px 32px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: #9ca8b4;
`;

const Input = styled.input`
    padding: 16px;
    border: 1px solid #d5dfe9;
    border-radius: 4px;
    margin: 8px 0;
    font-size: 0.9em;
    font-family: Nunito, sans-serif;
    color: inherit;
`;

const SelectWrapper = styled.div`
    position: relative;
`;

const Select = styled.select`
    padding: 16px;
    border: 1px solid #d5dfe9;
    border-radius: 4px;
    margin: 8px 0;
    font-size: 0.9em;
    font-family: Nunito, sans-serif;
    width: 100%;
    background: transparent;
    cursor: pointer;
    color: inherit;

    ::-ms-expand {
        display: none;
   }
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
`;

const SelectIcon = styled.div`
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    z-index: -1;
    color: #555f7c;
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
    color: inherit;
`;

const CharCounter = styled.p`
    position: absolute;
    bottom: 12px;
    right: 12px;
    background: #ffffff;
    font-size: 0.7em;
    color: #7d7a7a;
`;

const CompletedWrapper = styled.p`
    margin-top: 12px;
    display: flex;
    > p {
        margin-left: 8px;
        font-size: 0.9em;
        line-height: 1.3em;
    }
`;

const generateInputHandler = (setter, validation = () => true) => (e) => {
    const { value } = e.target;
    if (validation(value)) {
        setter(value);
    }
}

const countArray = Array.from((Array(MAX_COUNT).keys())).map(key => key + 1);

export default ({item, isCompletedEnabled, onUpdate}) => {
    const [ name, setName ] = useState(item?.name || '');
    const [ description, setDescription ] = useState(item?.description || '');
    const [ count, setCount ] = useState(item?.count || 1);
    const [ completed, setCompleted ] = useState(item?.completed || false);

    useEffect(() => {
        const updatedItem = {
            name,
            description,
            count: Number(count),
            completed,
            id: item?.id
        }
        onUpdate(updatedItem);
    }, [ name, description, count, completed ]);

    const nameInputHandler = generateInputHandler(setName);
    const descriptionInputHandler = generateInputHandler(setDescription, value => value.length <= 100);
    const countInputHandler = generateInputHandler(setCount);
    const toggleCompleted = () => setCompleted(!completed);


    return (
        <FormWrapper>
            <Input type="text" placeholder="Item Name" value={name} onChange={nameInputHandler} />
            <TextareaWrapper>
                <Textarea placeholder="Description" value={description} onChange={descriptionInputHandler} />
                <CharCounter>{description.length}/100</CharCounter>
            </TextareaWrapper>
            <SelectWrapper>
                <Select type="number" placeholder="How many?" value={count} onChange={countInputHandler}>
                    {countArray.map(num => <option value={num} key={`count_${num}`}>{num}</option>)}
                </Select>
                <SelectIcon className="material-icons">arrow_drop_down</SelectIcon>
            </SelectWrapper>
            {isCompletedEnabled && (
                <CompletedWrapper>
                    <Checkbox completed={completed} toggleCompleted={toggleCompleted} />
                    <p>Purchased</p>
                </CompletedWrapper>
            )}
        </FormWrapper>
    );
};
