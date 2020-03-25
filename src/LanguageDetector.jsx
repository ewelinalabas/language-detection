import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { Form } from './Form';
import { Result } from './Result';
import { detectTextLanguage } from './APIcall';

export const LanguageDetector = () => {
  const [detectedLanguages, setdetectedLanguages] = useState([])
  const [error, setError] = useState('')
  const submitForm = (text) => {
    detectTextLanguage(text)
    .then(
      data => {setdetectedLanguages(data.results)},
      error => {setError(error)}
    )
  }

  return (
    <Box>
      <Form submitForm={submitForm}/>
      <Result />
    </Box>
  );
}
