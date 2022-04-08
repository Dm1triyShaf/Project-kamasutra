import * as axios from "axios";

const instance = axios.create ({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0c3421b2-f0fc-40e8-b30f-6157d16d7c94"
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            });
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`,)
        .then(response => {
            return response.data;
        });
}