// side-nav.jsx

import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import SideNavItem from './side-nav-item';
import SideNavGroup from './side-nav-group';
import { items } from './config';
import { usePathname } from 'next/navigation';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname(); // Add this line
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), [pathname]); 

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32,
            }}
          >
            <Logo />
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {Array.isArray(items) &&
              items.map((item) => {
                const active = item.path ? pathname === item.path : false;

                return item.children ? (
                  <SideNavGroup
                    key={item.title}
                    path={item.path}
                    title={item.title}
                    icon={item.icon}
                    active={active}
                    disabled={item.disabled}
                    external={item.external}
                    items={item.children}
                  />
                ) : (
                  <SideNavItem
                    key={item.title}
                    path={item.path}
                    title={item.title}
                    icon={item.icon}
                    active={active}
                    disabled={item.disabled}
                    external={item.external}
                  />
                );
              })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};