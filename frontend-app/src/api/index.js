

const fetchResource = (resourceName,  userOptions = {}, id) => {
    const defaultOptions = {
        mode: 'cors',
    };
    const defaultHeaders = {
        "Content-Type": 'application/json'
    };
    const options = {
        ...defaultOptions,
        ...userOptions,
        headers: {
            ...defaultHeaders,
            ...userOptions.headers
        }
    };

    const API_HOST = 'http://localhost/api';

    let url = `${API_HOST}/${resourceName}`;

    if(id) {
        url = `${url}/${id}`;
    }

    if (options.body && typeof options.body === 'object') {             /* se as options tem um body && o tipo da body for um objeto, entra no if */
        options.body = JSON.stringify(options.body);
    }

    return fetch(url, options).then(responseObject => responseObject.json());
}

const getUsers = (userOptions) => {
    return fetchResource('users', userOptions);
}

const getUser = (id) => {
    return fetchResource('user', {}, id);
}

const createUsers = (data) => {
    return fetchResource('users', {method: 'POST', body: data})
}

const getBoards = (userOptions) => {
    return fetchResource('boards', userOptions);
}

const getPins = (userOptions) => {
    return fetchResource('pins', userOptions);
}

const createPin = (data) => {
    return fetchResource('pins', {method: 'POST', body: data})
}

export default {fetchResource, getPins, createUsers, getUser, createPin, getBoards, getUsers};