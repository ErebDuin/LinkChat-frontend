import React from 'react';

import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  message: {
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
  },
  sentMessage: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    alignSelf: 'flex-start',
  },
  text: {
    wordBreak: 'break-word',
  },
}));
const Message = ({ message, isUser }) => {
  const classes = useStyles();
  return (
    <Box
      className={`${classes.message} ${isUser ? classes.sentMessage : classes.receivedMessage}`}
      display="flex"
      flexDirection="column"
      alignItems={isUser ? 'flex-end' : 'flex-start'}
    >
      <Typography variant="body1" className={classes.text}>
        {message}
      </Typography>
    </Box>
  );
}
Message.propTypes = {
  message: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired,
};

Message.defaultProps = {
  isUser: false,
};

export default Message;