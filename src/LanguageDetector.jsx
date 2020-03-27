import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { Form } from './Form';
import { DetectedLanguagesBoard } from './DetectedLanguagesBoard';
import { ErrorMessage } from './ErrorMessage';
import { detectTextLanguage, openSource } from './thirdPartyCalls';

export const LanguageDetector = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detectedLanguages, setdetectedLanguages] = useState(null);
  const [error, setError] = useState(null);

  const hardcodedResult = [
    {
    "language_code": "nl",
    "language_name": "Dutch",
    "probability": 11.447804611689142,
    "percentage": 100,
    "reliable_result": true
    },
    {
    "language_code": "no",
    "language_name": "Norwegian",
    "probability": 10.386409572240652,
    "percentage": 90.72839661881791,
    "reliable_result": false
    }
  ]

  const submitForm = (text) => {
    setIsLoading(true);

    detectTextLanguage(text)
    .then(
      data => {
        data.success ? 
        setdetectedLanguages(data.results) :
        setError(data.error)
      },
      error => {
        setError(error)
      }
    );
    // setdetectedLanguages(hardcodedResult)
    setIsLoading(false)
  }

  const handleSearch = (languageName, source) => {
      openSource(languageName, source)
  }

  return (
    <Box>
      <Form submitForm={submitForm}/>
      {isLoading && <p>Loading</p>}
      {error && <ErrorMessage error={error} />}
      {detectedLanguages && <DetectedLanguagesBoard detectedLanguages={detectedLanguages} handleSearch={handleSearch} />}
    </Box>
  );
}
