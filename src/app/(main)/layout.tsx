"use client";
import { useState } from "react";
import "@/styles/admin.scss";
import { Box, BottomNavigation, Paper } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "@/templates/Navbar";
import { DRAWER_WIDTH } from "@/consts/SideMenu";
import SideMenu from "@/templates/Menu";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const audioLists = [
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
    },
    {
      name: "Dorost Nemisham",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3"
    }
  ];
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const [value, setValue] = useState(0);
  return (
    <section>
      <Box sx={{ display: "flex" }}>
        <>
          <Navbar handleDrawerToggle={handleDrawerToggle} />
          <SideMenu
            mobileOpen={mobileOpen}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            handleDrawerClose={handleDrawerClose}
          />
          <Box
            component="main"
            style={{ width: "100%" }}
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${DRAWER_WIDTH}px) !important` },
            }}
          >
            <Toolbar />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {children}
            </LocalizationProvider>
          </Box>
        </>
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1300 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          
        </BottomNavigation>
      </Paper>
    </section>
  );
}
