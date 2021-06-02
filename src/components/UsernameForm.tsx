import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppContext/AppContext';
import { MOBILE_BREAKPOINT } from '../constants';
import { Button } from '../constants/styledComponents';

const Form = styled.form`
  display: flex;
  @media (max-width: ${MOBILE_BREAKPOINT}px){
    flex-direction: column;
  }
`
const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #aaa;
  padding: 10px;
  margin: 10px;
  height: 50px;
  min-width: 200px;
  max-width: 300px;
  font-size: 16px;
  letter-spacing: 0.5px;
`
const SubmitButton = styled(Button)``;

const UsernameForm = () => {
  const { setUsername } = useAppContext();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = e.target.username.value;
    if (inputValue) {
      setUsername(inputValue);
      console.log(`Setting username to ${inputValue}`);
    }

    }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Input name='username' type='text' placeholder='Your username' />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  )
}

export default UsernameForm;