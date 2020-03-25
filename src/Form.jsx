import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { RotateLeftRounded, SendRounded } from '@material-ui/icons';

export const Form = ({ submitForm }) => {
  const LABEL_TEXT = "Type your text here..."
  const INITIAL_TEXT = ""

  const [text, setText] = useState(INITIAL_TEXT)

  const handleChange = (event) => {
    setText(event.target.value)
  }
  
  const handleReset = () => {
    setText(INITIAL_TEXT)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitForm(text)
  }

  return (
    <form>
      <TextField
        required
        type="text"
        id="outlined-basic" 
        label={LABEL_TEXT}
        value={text}
        variant="outlined"
        onChange={handleChange}
      />
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
        onClick={handleSubmit}
      >
        Detect language
      </Button>
    </form>
  );
}
