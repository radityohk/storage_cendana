// side-nav-group.jsx
import { Box, Typography, SvgIcon } from '@mui/material';
import { Stack as MuiStack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // MUI Chevron Down Icon
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; // MUI Chevron Up Icon
import SideNavItem from './side-nav-item';

const SideNavGroup = (props) => {
  const { path, title, icon, active, disabled, external, items } = props;
  const [open, setOpen] = React.useState(active);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <li>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          p: 1,
          '&:hover': {
            backgroundColor: 'neutral.700',
          },
        }}
        onClick={handleToggle}
      >
        <MuiStack direction="row" spacing={1} alignItems="center">
          {typeof icon === 'string' ? (
            <SvgIcon component="img" src={icon} alt={title} />
          ) : (
            icon
          )}
          <Typography variant="body2">{title}</Typography>
        </MuiStack>
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
      <Collapse in={open}>
        <ul>
          {items.map((item) => (
            <SideNavItem
              key={item.title}
              path={item.path}
              title={item.title}
              icon={item.icon}
              active={path === item.path}
              disabled={item.disabled}
              external={item.external}
            >
              {item.children}
            </SideNavItem>
          ))}
        </ul>
      </Collapse>
    </li>
  );
};

SideNavGroup.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  items: PropTypes.array,
};

export default SideNavGroup;
