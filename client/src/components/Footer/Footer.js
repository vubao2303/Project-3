import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'fixed',
    bottom: 0,
  },
  icon: {
    color: 'black',
    "&:hover": {
      color: 'violet',
    },
  },
});

function Footer() {
  const footStyle = useStyles();

  return (
    <div className="footer">
      <BottomNavigation
        showLabels
        className={footStyle.root}
      >
        <BottomNavigationAction href="https://github.com/vubao2303" target="_blank" label="B Vu" icon={<GitHubIcon className={footStyle.icon} />} />
        <BottomNavigationAction href="https://github.com/rslepejian" target="_blank" label="Raffi Lepejian" icon={<GitHubIcon className={footStyle.icon} />} />
        <BottomNavigationAction href="https://github.com/Jas-F" target="_blank" label="Jasmine Franklin" icon={<GitHubIcon className={footStyle.icon} />} />
      </BottomNavigation>
    </div>
  );
}

export default Footer;