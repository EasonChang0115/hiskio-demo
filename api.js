const pre = '/api';
const API = {
  auth: {
    login: {
      url: `${pre}/auth/login`,
      method: 'post',
    },
  },
  member: {
    me: {
      url: `${pre}/me`,
      method: 'get',
    },
  },
  fundraising: {
    getFundraising: {
      url: `${pre}/courses/fundraising`,
      method: 'get',
    },
  },
  carts: {
    postCarts: {
      url: `${pre}/carts`,
      method: 'post',
    },
    deleteCarts: {
      url: `${pre}/carts`,
      method: 'delete',
    },
  },
};

module.exports = API;
