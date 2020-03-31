import { styled } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

export const StyledFooter = styled(Box)({
  width:"100%",
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:"stretch",
  backgroundColor:indigo[700],
  padding: '1rem',
  marginTop: '1rem',
})
