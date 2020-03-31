import { styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

export const StyledApplicationBar = styled(AppBar)({
  position:'sticky',
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'baseline',
  padding: '1.5rem',
  marginBottom: '1rem',
})