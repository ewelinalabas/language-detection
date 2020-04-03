import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

export const StyledApplicationBar = styled(AppBar)({
  position: "sticky !important",
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "row !important",
  justifyItems: "baseline",
  padding: "1rem",
})
