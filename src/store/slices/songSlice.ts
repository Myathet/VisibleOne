import { createSlice } from "@reduxjs/toolkit";
import { SongList, songState, AlbumList } from "@/types/song";
import { fetchSongList, fetchAlbumList } from "@/store/thunks/songThunk";

const initialState: songState = {
    loading: false,
    albumLoading: false,
    success: false,
    songErrors: undefined,
    songMessage: '',
    songList: {} as SongList[],
    albumList: {} as AlbumList[],
}
const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
      initialise: (state) => {
        return initialState;
      },
      resetErrors: (state) => {
        state.songErrors = undefined;
      },
      resetMessage: (state) => {
        state.success = false;
        state.songMessage = ''; 
      }
    },
    extraReducers: builder => {
      builder
        // fetchLabList
        .addCase(fetchSongList.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(fetchSongList.fulfilled, (state, action) => {
          state.loading = false;
          state.songList = action.payload;
        })
        .addCase(fetchSongList.rejected, (state, action) => {
          state.loading = false;
          state.songErrors = action.payload;
        })
        // fetchAlbumList
        .addCase(fetchAlbumList.pending, (state, action) => {
            state.albumLoading = true;
          })
          .addCase(fetchAlbumList.fulfilled, (state, action) => {
            state.albumLoading = false;
            state.albumList = action.payload;
          })
          .addCase(fetchAlbumList.rejected, (state, action) => {
            state.albumLoading = false;
            state.songErrors = action.payload;
          })
    }
  })
  
  export const {initialise, resetErrors, resetMessage} = songSlice.actions;
  
  const {reducer: songReducer} = songSlice;
  export default songReducer;