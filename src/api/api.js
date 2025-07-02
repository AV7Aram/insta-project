import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "147d196f-adc5-4313-9b44-238229239935"
    },
    withCredentials: true,
})

export const socialAPI = {
    getUsers(page = 1) {
        return instance.get(`/users?count=12&page=${page}`)
    },
    getProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },
    login(email, password, rememberMe = false) {
        return instance.post('/auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('/auth/login')
    },
    me() {
        return instance.get(`/auth/me`)
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("file", photoFile);
        return instance.put('/profile/photo', formData);
    }
}