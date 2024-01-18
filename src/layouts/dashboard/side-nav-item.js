// side-nav-item.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, SvgIcon, Typography } from '@mui/material';

const SideNavItem = (props) => {
  const { path, title, icon, active, disabled, external, children } = props;

  if (children) {
    return (
      <li>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            p: 1,
            '&:hover': {
              backgroundColor: 'neutral.700',
            },
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            {typeof icon === 'string' ? (
              <SvgIcon component="img" src={icon} alt={title} />
            ) : (
              icon
            )}
            <Typography variant="body2">{title}</Typography>
          </Stack>
        </Box>
      </li>
    );
  }

  return (
    <li>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          p: 1,
          '&:hover': {
            backgroundColor: 'neutral.700',
          },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {typeof icon === 'string' ? (
            <SvgIcon component="img" src={icon} alt={title} />
          ) : (
            icon
          )}
          <Typography variant="body2">{title}</Typography>
        </Stack>
      </Box>
    </li>
  );
};

SideNavItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  children: PropTypes.array,
};

export default SideNavItem;
