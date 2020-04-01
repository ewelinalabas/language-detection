import React, { useState } from 'react';
import { Typography, Container } from '@material-ui/core';
import { RotateLeftRounded, SendRounded } from '@material-ui/icons';
import { StyledForm } from './styledComponents/StyledForm';
import { StyledTextArea } from './styledComponents/StyledTextArea';
import { StyledButton } from './styledComponents/StyledButton';

export const Form = ({ submitForm }) => {
  const INITIAL_TEXT = "";

  const [text, setText] = useState(INITIAL_TEXT);

  const handleChange = (event) => {
    setText(event.target.value);
  }
  
  const handleReset = () => {
    setText(INITIAL_TEXT);
  }

  const handleClick = (event) => {
    event.preventDefault();
    submitForm(text);
  }

  return (
    <StyledForm>
      <Typography variant="h2">Type your text here</Typography>
      <StyledTextArea
        rowsMin="10"
        value={text}
        onChange={handleChange}
      />
      <Container>
        <StyledButton
          variant="contained"
          color="secondary"
          startIcon={<RotateLeftRounded />}
          onClick={handleReset}
        >
          Reset text
        </StyledButton>
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<SendRounded />}
          onClick={handleClick}
        >
          Detect language
        </StyledButton>
      </Container>
    </StyledForm>
  );
}
