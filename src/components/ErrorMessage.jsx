import React from 'react';
import { Typography } from '@material-ui/core';
import { ErrorRounded } from '@material-ui/icons';
import { NETWORK_ERROR, ERROR_DESCRIPTION } from '../constants';
import { StyledErrorMessage } from '../styledComponents/StyledErrorMessage';

export const ErrorMessage = ({ error }) => {
  const formatText = (text) => {
    return (text.charAt(0).toUpperCase() + text.slice(1))
      .replace(/_/g, " ") //remove underscores
      .replace(/\[.*/, "") //end text after "."
  }

  let errorHeader
  let errorDescription 
  if(error.message === NETWORK_ERROR) {
    errorHeader = error.message
    errorDescription = ERROR_DESCRIPTION.network
  } else if(error.message) {
    errorHeader = error.message
    errorDescription = ERROR_DESCRIPTION.other
  } else {
    errorHeader = formatText(error.type)
    errorDescription = formatText(error.info)
  }

  return (
    <StyledErrorMessage>
      <ErrorRounded />
      <Typography variant="h2">{errorHeader}</Typography>
      <Typography variant="h2">{errorDescription}</Typography>
    </StyledErrorMessage>
  );
}
