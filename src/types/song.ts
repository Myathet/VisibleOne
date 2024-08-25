export type songState = {
    loading: boolean;
    albumLoading: boolean;
    songList: SongList[];
    albumList: AlbumList[];
    success: boolean;
    songMessage: string;
    songErrors: any;
}
export type SongList = {
    strAlbum: string;
    strGenre: string;
    idAlbum: string;
}
export type AlbumList = {
    strAlbum: string;
    intYearReleased: string;
}