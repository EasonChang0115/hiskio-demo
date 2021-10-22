// 驗證使用者 id 以及 token 是否登入為狀態 若非登入狀態則跳到登入頁並清空登入資訊 和 cookie
export default function ({ app, store, redirect, route, error, router, query }) {
  console.log('authenticated middleware');
}
