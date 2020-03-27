import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ErrorRounded } from '@material-ui/icons';
import { NETWORK_ERROR, ERROR_DESCRIPTION } from './constants';

export const ErrorMessage = ({ error }) => {
  const errorHeader = error.type || error.message
  let errorDescription = ""
  errorDescription = error.message === NETWORK_ERROR ? ERROR_DESCRIPTION.network : ERROR_DESCRIPTION.other

  return (
    <Box component="span" m={1}>
      <ErrorRounded />
      <Typography>{errorHeader}</Typography>
      <Typography>{errorDescription}</Typography>
    </Box>
  );
}
