import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { ForumRounded } from '@material-ui/icons';

export const ApplicationBar = () => {
  return (
    <AppBar position="static" >
      <ForumRounded edge="start" />
      <Typography>Language Detector</Typography>
    </AppBar>
  );
}
