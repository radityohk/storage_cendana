// side-nav-item.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'; // Import Link from Next.js
import { Box, Stack, SvgIcon, Typography } from '@mui/material';

const SideNavItem = (props) => {
  const { path, title, icon, active, disabled, external, children } = props;

  if (children) {
    return (
      <li>
        <Link href={path}>
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
              {icon && typeof icon === 'string' ? (
                <SvgIcon component="img" src={icon} alt={title} color="white" />
              ) : (
                React.cloneElement(icon, { style: { color: 'white' } })
              )}
              <Typography variant="body2" color="white">
                {title}
              </Typography>
            </Stack>
          </Box>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link href={path}>
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
            {icon && typeof icon === 'string' ? (
              <SvgIcon component="img" src={icon} alt={title} color="white" />
            ) : (
              icon && React.cloneElement(icon, { style: { color: 'white' } })
            )}
            <Typography variant="body2" color="white">
              {title}
            </Typography>
          </Stack>
        </Box>
      </Link>
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
