import React from 'react';
import { Typography } from '@material-ui/core';
import { ErrorRounded } from '@material-ui/icons';
import { NETWORK_ERROR, ERROR_DESCRIPTION } from '../constants';
import { StyledErrorMessage } from '../styledComponents/StyledErrorMessage';

export const ErrorMessage = ({ error }) => {
  const formatText = (text) => {
    return text ?
      (text.charAt(0).toUpperCase() + text.slice(1))
      .replace(/_/g, " ") //remove underscores
      .replace(/\[.*/, "") : //end text after "."
      ""
  }

  const errorHeader = error.message || formatText(error.type)
  let errorDescription = formatText(error.info)
  if(error.message === NETWORK_ERROR) {
    errorDescription = ERROR_DESCRIPTION.network
  } else if(error.message) {
    errorDescription = ERROR_DESCRIPTION.other
  }

  return (
    <StyledErrorMessage>
      <ErrorRounded />
      <Typography variant="h2">{errorHeader}</Typography>
      <Typography variant="h2">{errorDescription}</Typography>
    </StyledErrorMessage>
  );
}
