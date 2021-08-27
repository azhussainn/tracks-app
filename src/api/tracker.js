import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL: 'http://e90b-2405-201-5504-d54b-bd11-41b0-b948-6577.ngrok.io/'
})

instance.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
);

export default instance