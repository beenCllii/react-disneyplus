import axios from "axios";

const axiosInstance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params: {
        api_key : 'bb58c0a3c56b036d814917fbca06c08a',
        language : 'ko-KR'
    }
});

export default axiosInstance;