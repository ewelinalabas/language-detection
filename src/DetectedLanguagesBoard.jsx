import React from 'react';
import { Grid, Typography, List } from '@material-ui/core';
import { DetectedLanguagesItem } from './DetectedLanguagesItem';
import { StyledList } from './styledComponents/StyledList';

export const DetectedLanguagesBoard = ({ detectedLanguages, handleSearch }) => {
  return (
    <Grid container justify="center">
      <StyledList dense={false}>
        {detectedLanguages.map((language, index) => 
          <DetectedLanguagesItem
            key={index} 
            code={language.language_code}
            name={language.language_name}
            percentageMatch={language.percentage}
            handleSearch={handleSearch}
          />
        )}
      </StyledList>
    </Grid>
  );
}

