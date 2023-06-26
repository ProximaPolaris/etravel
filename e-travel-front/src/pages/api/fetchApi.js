import * as config from './config.js';

const fetchApi = async (url, method, token = null, data = null) => {    
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };
    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    return await (await fetch(url.href, options)).json();
}

export default fetchApi;