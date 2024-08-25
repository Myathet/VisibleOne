import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  ButtonBase,
  Menu,
  BadgeProps,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  InputBase
} from "@mui/material";
import { Icon } from "@iconify/react";
import { styled, alpha } from "@mui/material/styles";
import Fade from "@mui/material/Fade";

type NavBarProps = {
  handleDrawerToggle: () => void;
};
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 10,
    padding: "0 4px",
    backgroundColor: "#e22b7f",
  },
}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '30ch',
          border: "1px solid #b3b4b5",
          borderRadius: "10px",
          fontSize: "1rem"
        },
      },
    },
  }));
const Navbar: React.FC<NavBarProps> = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar sx={{ backgroundColor: "#ffffff", color: "#000" }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Icon icon="hugeicons:menu-05" width={30} />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: 'center',
            marginRight: "2rem",
            justifyContent: "space-between"
          }}
        >
            <Search sx={{ paddingLeft: "17rem"}}>
                <SearchIconWrapper>
                <Icon icon="carbon:search" width={28} />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search for songs, artists, albums"
                inputProps={{ "aria-label": "search" }}
                />
            </Search>
            <div>
                <ButtonBase
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                >
                <StyledBadge badgeContent="3" color="info">
                    <Icon icon="clarity:notification-line" width={28} />
                </StyledBadge>
                </ButtonBase>
                <Menu
                id="fade-menu"
                MenuListProps={{
                    "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                >
                <List sx={{ maxWidth: 360, minWidth: 350, padding: 0 }} id="noti">
                    <ListItem secondaryAction={"2m"}>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Maria likes your playlist"
                        secondary="XD 4 Life"
                    />
                    </ListItem>
                    <ListItem secondaryAction={"1hr"}>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Jasmine is currently listening to"
                        secondary="Best of Blues"
                    />
                    </ListItem>
                    <ListItem secondaryAction={"5hr"}>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Marc liked your playlist"
                        secondary="Booping at Adobe"
                    />
                    </ListItem>
                </List>
                </Menu>
            </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
