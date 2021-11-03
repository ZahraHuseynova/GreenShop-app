import axios from "axios";

export default axios.create({
    baseURL:"http://api.unsplash.com",
    headers:{
        Authorization:"Client-ID xJupabMeSKorDfV-NXMyjtLoABVMFjJUC4AyHmV6Rb8"
    },
});