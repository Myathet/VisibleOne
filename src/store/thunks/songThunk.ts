import songService from "@/services/songService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSongList = createAsyncThunk(
    'fetchSongList',
    async (_, thunkAPI) => {
      try {
        const res = await songService.getsongList();
        return res.album;
      } catch (err: any) {
        return thunkAPI.rejectWithValue({
          status: err.response.status,
          message: err.response.data.message,
          errors: err.response.data.errors,
        })
      }
    }
  )

  export const fetchAlbumList = createAsyncThunk(
    'fetchAlbumList',
    async (_, thunkAPI) => {
      try {
        const res = await songService.getalbumList();
        return res.album;
      } catch (err: any) {
        return thunkAPI.rejectWithValue({
          status: err.response.status,
          message: err.response.data.message,
          errors: err.response.data.errors,
        })
      }
    }
  )