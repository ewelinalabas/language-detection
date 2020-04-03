import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

export const StyledFooter = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "stretch",
  backgroundColor: indigo[700],
  padding: "1rem",
})
