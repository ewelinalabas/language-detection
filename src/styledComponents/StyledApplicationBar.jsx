import React from 'react';
import { styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

export const StyledApplicationBar = styled(AppBar)({
  position: 'static',
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'baseline',
  padding: '1rem',
  marginBottom: '1rem',
})
