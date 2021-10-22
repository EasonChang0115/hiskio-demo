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
    if (res.status === 200) {
      return res.data;
    }
  });
  $axios.onError((error) => {
    switch (error.response.status) {
      case 403:
      case 404:
        error({ statusCode: 404, message: '找不到頁面' });
        break;
      case 500:
        error({ statusCode: 500, message: '服務器出現錯誤，請稍後再試' });
        break;
      default:
        break;
    }
  });
}
