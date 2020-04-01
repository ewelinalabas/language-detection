import React, { useState } from 'react';
import { TextField, ButtonGroup, Button, Typography } from '@material-ui/core';
import { RotateLeftRounded, SendRounded } from '@material-ui/icons';
import { StyledForm } from './styledComponents/StyledForm';
import { StyledTextArea } from './styledComponents/StyledTextArea';

export const Form = ({ submitForm }) => {
  const LABEL_TEXT = "Type your text here...";
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
        // required
        // multiline
        // type="text"
        // id="outlined-basic" 
        // label={LABEL_TEXT}
        value={text}
        // variant="outlined"
        onChange={handleChange}
      />
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          // className={classes.button}
          startIcon={<RotateLeftRounded />}
          onClick={handleReset}
        >
          Reset text
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          // className={classes.button}
          endIcon={<SendRounded />}
          onClick={handleClick}
        >
          Detect language
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
}
