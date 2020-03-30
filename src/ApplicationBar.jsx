import React from 'react';
import { Typography } from '@material-ui/core';
import { ForumRounded } from '@material-ui/icons';
import { StyledApplicationBar } from './styledComponents/StyledApplicationBar';

export const ApplicationBar = () => {
  return (
    <StyledApplicationBar >
      <ForumRounded edge="start" />
      <Typography variant="h1">Language Detector</Typography>
    </StyledApplicationBar>
  );
}
