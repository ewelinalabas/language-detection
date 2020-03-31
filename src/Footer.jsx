import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { StyledFooter } from './styledComponents/StyledFooter';

export const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="h3">Created using
        <Link href="https://languagelayer.com"> Languagelayer API.</Link>
      </Typography>
      <Typography variant="h3">See application code on
        <Link href="https://github.com/ewelinalabas"> Github.</Link>
      </Typography>
    </StyledFooter>
  )
}
