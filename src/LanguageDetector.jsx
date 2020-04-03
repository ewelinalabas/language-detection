import React, { useState } from 'react';
import { Box, Grid, Divider } from '@material-ui/core';
import { Form } from './Form';
import { DetectedLanguagesBoard } from './DetectedLanguagesBoard';
import { ErrorMessage } from './ErrorMessage';
import { detectTextLanguage, openSource } from './thirdPartyCalls';

export const LanguageDetector = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
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
    },
    {
    "language_code": "no",
    "language_name": "Norwegian",
    "probability": 10.386409572240652,
    "percentage": 90.72839661881791,
    "reliable_result": false
    },
    {
    "language_code": "no",
    "language_name": "Norwegian",
    "probability": 10.386409572240652,
    "percentage": 90.72839661881791,
    "reliable_result": false
    },
    {
    "language_code": "no",
    "language_name": "Norwegian",
    "probability": 10.386409572240652,
    "percentage": 90.72839661881791,
    "reliable_result": false
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
    setIsSubmitted(true)
    setIsLoading(true);

    // detectTextLanguage(text)
    // .then(
    //   data => {
    //     data.success ? 
    //     setdetectedLanguages(data.results) :
    //     setError(data.error)
    //   },
    //   error => {
    //     setError(error)
    //   }
    // );
    setdetectedLanguages(hardcodedResult)
    setIsLoading(false)
  }

  const handleSearch = (languageName, source) => {
      openSource(languageName, source)
  }

  return (
    <Grid
        container
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item md={5}>
          <Box>
            <Form submitForm={submitForm}/>
          </Box>
        </Grid>
        <Grid item md={5}>
          {isSubmitted && <Box>
          {isLoading && <p>Loading</p>}
          {error && <ErrorMessage error={error} />}
          {detectedLanguages && <DetectedLanguagesBoard detectedLanguages={detectedLanguages} handleSearch={handleSearch} />}
          </Box>}
        </Grid>
    </Grid>
  );
}
