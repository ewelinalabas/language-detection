import React from 'react';
import { StyledLoadingMessage } from '../styledComponents/StyledLoadingMessage';
import { CircularProgress, Typography } from '@material-ui/core';

export const LoadingMessage = () => {
  return (
    <StyledLoadingMessage>
      <CircularProgress color="secondary" />
      <Typography variant="h2">Your query is processed...</Typography>
    </StyledLoadingMessage>
  )
}
