import axios from 'axios';

const serverUrl = "http://localhost:8080/"

const folderService = {
    getFolders(path) {
        return axios.get(`${serverUrl}api/folders?path=${path}`)
    }
}

export default folderService;