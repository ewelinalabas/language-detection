import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

export const StyledApplicationBar = styled(AppBar)({
  position: "sticky",
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "row",
  justifyItems: "baseline",
  padding: "1.5rem",
  marginBottom: "1rem",
})
