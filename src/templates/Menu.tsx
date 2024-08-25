import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DRAWER_WIDTH, SIDE_MENU_ITEM, PLAYLIST_MENU_ITEM } from "@/consts/SideMenu";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { Icon } from "@iconify/react";

type SideMenuProps = {
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
};
const SideMenu: React.FC<SideMenuProps> = ({
  mobileOpen,
  handleDrawerTransitionEnd,
  handleDrawerClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const pathname = usePathname();
  const handleClick = (itemId: number) => {
    setOpenItems((prevOpen) => {
      const isOpen = prevOpen.includes(itemId);
      return isOpen
        ? prevOpen.filter((id) => id !== itemId)
        : [...prevOpen, itemId];
    });
  };

  const isItemOpen = (itemId: number) => openItems.includes(itemId);

  // const logout = () => {
  //   dispatch(fetchLogout());
  // }
  const handleClickOpenDialog = () => {
    setConfirmDialog(true);
  };

  const handleCloseDialog = () => {
    setConfirmDialog(false);
  };

  const handleConfirm = () => {
    handleCloseDialog();
  };

  const drawer = (
    <List sx={{ pl:2}}>
      <Typography>BROWSE</Typography>
      {SIDE_MENU_ITEM.map((menu, index) =>
        menu.type == "item" ? (
          <Box sx={{ py: 0.5 }} key={index}>
            <Link href={`/${menu.href}`}>
              <ListItem
                className={pathname == `/${menu.href}` ? "active" : ""}
                disablePadding
              >
                <ListItemButton>
                  <Box sx={{ pr: 2 }}>
                  <Icon icon={menu.icon} width={28} />
                  </Box>
                  <ListItemText primary={menu.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          </Box>
        ) : (
          <React.Fragment>
            <Box sx={{ py: 0.5 }} key={index + 1}>
              <ListItemButton onClick={() => handleClick(index)}>
                <Box sx={{ pr: 2 }}>
                </Box>
                <ListItemText primary={menu.label} />
                {isItemOpen(index) ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </Box>
            <Collapse
              in={isItemOpen(index)}
              timeout="auto"
              unmountOnExit
              key={index}
            >
              {menu.subitems.map((sub_menu) => (
                <Box sx={{ py: 0.5 }} key={index}>
                  <Link href={`/${sub_menu.href}`}>
                    <ListItem
                      className={
                        pathname == `/${sub_menu.href}` ? "active" : ""
                      }
                      disablePadding
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <Box sx={{ pr: 2 }}>
                          {/* <Icon
                          icon="ri:arrow-right-double-fill"
                          style={{ width: "20px", height: "auto" }}
                        /> */}
                        </Box>
                        <ListItemText primary={sub_menu.label} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </Box>
              ))}
            </Collapse>
          </React.Fragment>
        )
      )}
      <Typography sx={{ mt: 2, mb: 2}}>YOUR PLAYLIST</Typography>
      {PLAYLIST_MENU_ITEM.map((menu, index) =>
        menu.type == "item" ? (
          <Box sx={{ py: 0.5 }} key={index}>
            <Link href={`/${menu.href}`}>
              <ListItem
                className={pathname == `/${menu.href}` ? "active" : ""}
                disablePadding
              >
                <ListItemButton>
                  <Box sx={{ pr: 2 }}>
                  <Icon icon={menu.icon} width={28} />
                  </Box>
                  <ListItemText primary={menu.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          </Box>
        ) : (
          <React.Fragment>
            <Box sx={{ py: 0.5 }} key={index + 1}>
              <ListItemButton onClick={() => handleClick(index)}>
                <Box sx={{ pr: 2 }}>
                </Box>
                <ListItemText primary={menu.label} />
                {isItemOpen(index) ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </Box>
            <Collapse
              in={isItemOpen(index)}
              timeout="auto"
              unmountOnExit
              key={index}
            >
              {menu.subitems.map((sub_menu) => (
                <Box sx={{ py: 0.5 }} key={index}>
                  <Link href={`/${sub_menu.href}`}>
                    <ListItem
                      className={
                        pathname == `/${sub_menu.href}` ? "active" : ""
                      }
                      disablePadding
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <Box sx={{ pr: 2 }}>
                          {/* <Icon
                          icon="ri:arrow-right-double-fill"
                          style={{ width: "20px", height: "auto" }}
                        /> */}
                        </Box>
                        <ListItemText primary={sub_menu.label} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </Box>
              ))}
            </Collapse>
          </React.Fragment>
        )
      )}
    </List>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideMenu;
