/*
    Fetch error helper
    param response = object
*/

export const handleResponse = (response) => {
    // Return response using Promise
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
}