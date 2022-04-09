import instance from "./instance";
import * as RequestApi from "./RequestApi";


//common functions to manage request , response and handling error

const sendError = (err, showConsole = false) => {
    if(showConsole){
        console.log(err);
    }
    return err.message;
}

const sendPostRequest = async (URI, data, headers = null) => {
    const res = await instance.post(URI, data, headers);
    return res;
}

const sendGetRequest = async (URI, headers = null) => {
    const res = await instance.get(URI, null, headers);
    return res;
}


// Authentication APIs starting from here

export const login = async (data) => {
    try {
        const response = await sendPostRequest(RequestApi.authRequest.login, data);
        return response;
    } catch (err) {
        sendError(err,true);
    }
}

export const signup = async (data) => {
    try {
        const response = await sendPostRequest(RequestApi.authRequest.signup, data);
        return response;
    } catch (err) {
        sendError(err,true);
    }
}

// Users APIs starting from here

export const getUsers = async (data) => {
    try {
        const response = await sendGetRequest(RequestApi.authRequest.signup);
        return response;
    } catch (err) {
        sendError(err,true);
    }
}
