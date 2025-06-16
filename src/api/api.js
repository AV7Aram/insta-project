import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
})

export const socialAPI = {
    getUsers() {
        return instance.get('/users?count=100&page=1')
    }
}
