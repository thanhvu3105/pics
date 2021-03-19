import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID mKuXGBqa7Nw5kUymcM0pZhac70DK-6byVUqA8pWVGZU'
    }

});