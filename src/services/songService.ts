import api from "./api";

const getsongList = async () => {
    return api
        .get(`searchalbum.php?s=daft_punk`)
        .then(response => response.data);
}
const getalbumList = async () => {
    return api
        .get(`discography.php?s=coldplay`)
        .then(response => response.data);
}
export default {
    getsongList,
    getalbumList
}