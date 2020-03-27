import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { SearchRounded, SchoolRounded } from '@material-ui/icons';
import { THIRD_PARTY } from './constants';

export const DetectedLanguagesItem = ({ code, name, percentageMatch, handleSearch }) => {
  const handleClick = (event, source) => {
    event.preventDefault()
    handleSearch(name, source)
  }
 
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          {code.toUpperCase()}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={"Match: " + Math.round(percentageMatch) + "%"}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label={WIKIPEDIA} onClick={(event) => handleClick(event, THIRD_PARTY.wikipedia)}>
          <SearchRounded />
        </IconButton>
        <IconButton edge="end" aria-label={GOOGLE} onClick={(event) => handleClick(event, THIRD_PARTY.google)}>
          <SchoolRounded />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
