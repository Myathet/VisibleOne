"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  ListItemIcon,
  Skeleton,
  Chip,
  Button,
  CardContent,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchSongList, fetchAlbumList } from "@/store/thunks/songThunk";
import { styled } from "@mui/material/styles";

const ButtonStyled = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: fit-content;
  height: 40px;
  display: none;
`;

const ContainerStyled = styled("div")`
  position: absolute;
  &:hover {
    .test-button {
      display: block;
    }
  }  
}`;
const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, success, songList, albumLoading, albumList } = useSelector(
    (state: RootState) => state.song
  );
  useEffect(() => {
    dispatch(fetchSongList());
    dispatch(fetchAlbumList());
  }, []);
  return (
    <Box style={{ width: "100%", color: "#000000" }} sx={{ pl: "3rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mb={6}>
          <Grid xs={12} sm={7}>
            <Box
              sx={{
                width: "95%",
                height: "350px",
                background:
                "linear-gradient(to right bottom, #e63c7f, #bb208a)",
                borderRadius: "50px",
              }}
            >
              <Box sx={{ paddingLeft: "50px", paddingTop: "50px" }}>
                <Typography variant="h2" sx={{ color: "#ffffff" }}>
                  GET LOST
                </Typography>
                <Typography variant="h6" sx={{ color: "#eeeeee" }}>
                  IN YOUR MUSIC
                </Typography>
              </Box>
              <Box sx={{ paddingLeft: "50px", paddingTop: "130px"}}>
                <Icon style={{ color: "#ffffff"}}icon="mdi:play" width={28} />
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={5}>
            <Box
              sx={{
                width: "100%",
                height: "350px",
                background:
                  "linear-gradient(to right bottom, #1fc0f0, #1b66cd)",
                borderRadius: "50px",
              }}
            >
              <Box sx={{ paddingLeft: "50px", paddingTop: "50px" }}>
                <Typography variant="h2" sx={{ color: "#ffffff" }}>
                  MELLOW
                </Typography>
                <Typography variant="h6" sx={{ color: "#eeeeee" }}>
                  BEATS
                </Typography>
              </Box>
              <Box sx={{ paddingLeft: "50px", paddingTop: "130px"}}>
                <Icon style={{ color: "#ffffff"}}icon="mdi:play" width={28} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <Typography sx={{ fontWeight: "500", fontSize: "1.2rem", mb: 2 }}>
              Recently Played
            </Typography>
            <Box>
              {loading ? (
                <div className="flex space-x-2">
                  <Skeleton variant="rectangular" width={"100%"} height={300} />
                </div>
              ) : (
                <div>
                  {songList && songList.length > 1 ? (
                    <>
                      {songList &&
                        songList.slice(0, 4).map((song, index) => (
                          <ListItem
                            key={index}
                            component="div"
                            disablePadding
                            sx={{
                              "& svg": {
                                opacity: 0,
                              },
                              "&:hover, &:focus": {
                                bgcolor: "unset",
                                "& svg:last-of-type": {
                                  right: 0,
                                  opacity: 1,
                                },
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                height: "80%",
                                display: "block",
                                left: 0,
                                width: "1px",
                              },
                            }}
                          >
                            <ListItemButton sx={{ height: 56 }}>
                              <ListItemAvatar>
                                <Avatar variant="rounded">
                                  <Icon icon="mdi:play" width={28} />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={song.strAlbum}
                                primaryTypographyProps={{
                                  color: "primary",
                                  fontWeight: "medium",
                                  variant: "body2",
                                  maxWidth: "200px",
                                  minWidth: "200px",
                                  style: {
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  },
                                }}
                              />
                              <ListItemText
                                primary={song.strGenre}
                                primaryTypographyProps={{
                                  color: "primary",
                                  fontWeight: "100",
                                  variant: "caption",
                                }}
                              />
                              <ListItemText
                                primary={song.idAlbum}
                                primaryTypographyProps={{
                                  color: "primary",
                                  fontWeight: "100",
                                  variant: "caption",
                                }}
                              />
                              <ListItemIcon
                                sx={{
                                  "& svg": {
                                    opacity: 1,
                                  },
                                  "&:hover, &:focus": {
                                    bgcolor: "unset",
                                    "& svg:last-of-type": {
                                      color: "#ff0000",
                                    },
                                  },
                                }}
                              >
                                <Icon icon="ph:heart-duotone" width={28} />
                              </ListItemIcon>
                              <ListItemIcon
                                sx={{
                                  "& svg": {
                                    opacity: 1,
                                  },
                                }}
                              >
                                <Icon icon="solar:menu-dots-bold" width={28} />
                              </ListItemIcon>
                            </ListItemButton>
                          </ListItem>
                        ))}
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
            </Box>
          </Grid>
          <Grid xs={12} sm={6}>
            <Typography sx={{ fontWeight: "500", fontSize: "1.2rem", mb: 4 }}>
              Recommended For You
            </Typography>
            {albumLoading ? (
              <div className="flex space-x-2">
                <Skeleton variant="rectangular" width={"100%"} height={300} />
              </div>
            ) : (
              <>
                {albumList && albumList.length > 1 ? (
                  <Grid container spacing={2} sx={{ pl: 2 }}>
                    {albumList &&
                      albumList.slice(0, 3).map((album, index) => (
                        <Grid xs={4}>
                          <Box
                            id="recommend"
                            sx={{
                              "& svg": {
                                opacity: 0,
                              },
                              "&:hover, &:focus": {
                                bgcolor: "unset",
                                "& svg:last-of-type": {
                                  right: 0,
                                  opacity: 1,
                                },
                              },
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                height: "80%",
                                display: "block",
                                left: 0,
                                width: "1px",
                              },
                            }}
                          >
                            <Avatar variant="rounded">
                              <Icon icon="mdi:play" width={28} />
                            </Avatar>
                            <Typography
                              fontWeight="medium"
                              variant="body2"
                              sx={{ mt: 2 }}
                            >
                              {album.strAlbum}
                            </Typography>
                            <Typography variant="caption" fontWeight="100">
                              {album.intYearReleased}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                  </Grid>
                ) : (
                  <div></div>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default HomeScreen;
