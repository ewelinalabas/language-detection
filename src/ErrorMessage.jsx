import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ErrorRounded } from '@material-ui/icons';
import { NETWORK_ERROR, ERROR_DESCRIPTION } from './constants';

export const ErrorMessage = ({ error }) => {
  const errorHeader = error.type || error.message
  let errorDescription = error.info
  if(error.message === NETWORK_ERROR) {
    errorDescription = ERROR_DESCRIPTION.network
  } else if(error.message) {
    errorDescription = ERROR_DESCRIPTION.other
  }

  return (
    <Box component="span" m={1}>
      <ErrorRounded />
      <Typography>{errorHeader}</Typography>
      <Typography>{errorDescription}</Typography>
    </Box>
  );
}
