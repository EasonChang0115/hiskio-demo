import { capitalize } from '@/utils/utils.js';
export default function ({ app, $axios, redirect, store, cookies, error }) {
  $axios.setHeader('Content-Type', 'application/json');
  $axios.defaults.timeout = 3000;
  $axios.onRequest((config) => {
    if (app.$cookies.get('accessToken') && app.$cookies.get('tokenType')) {
      config.headers.Authorization = `${capitalize(app.$cookies.get('tokenType'))} ${app.$cookies.get('accessToken')}`;
    }
  });
  $axios.onResponse((res) => {
    return new Promise((resolve, reject) => {
      if (res.status === 200) {
        resolve(res.data);
      } else {
        reject(res.data.message);
      }
    });
  });
}
