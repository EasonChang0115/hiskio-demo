// 驗證使用者 id 以及 token 是否登入為狀態 若非登入狀態則跳到登入頁並清空登入資訊 和 cookie
export default function ({ app, store, redirect, route, error, router, query }) {
  console.log('authenticated middleware');
  // try {
  //   const token = app.$cookies.get('user_token');
  //   if (!token) redirect('/sorry');
  //   await store.dispatch('user/validate', { token });
  //   // 登入狀態驗證完畢後，驗證路由權限
  //   if (route.name === 'member-management' &&
  //     store.state.user.account.accessLevel !== 'manager') {
  //     redirect('/sorry');
  //   }
  // } catch (e) {
  //   store.dispatch('user/logout', {
  //     callback() {
  //       redirect('/sorry');
  //       store.commit('user/ClEAR_USER');
  //       store.commit('designWorks/EMPTY_DATA');
  //       store.commit('folder/EMPTY_DATA');
  //     }
  //   });
  // }
}
