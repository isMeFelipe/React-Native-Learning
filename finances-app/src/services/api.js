import axios from 'axios';

const api = axios.create({ 

    baseUrl: 'http://192.168.18.50:3000' // para http tem q colocoar o ip
    //baseUrl: 'https://url-com-https-cadastrada' //
}) 

export default api;