async function get(url) {
    const options = {};
    options.method = 'GET';

    const response = await fetch(url, options);
    if(response.status == 204){
        return;
    }

    const result = response.json();
    return result
}

export default {
    get
}
