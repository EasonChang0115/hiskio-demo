export default function (error) {
  let message = '發生點錯誤';
  const { status, data } = error.response;
  switch (status) {
    case 400:
      message = data.message.account[0];
      break;
    case 401:
      message = '登入驗證失敗';
      break;
    default:
      break;
  }
  return message;
}
