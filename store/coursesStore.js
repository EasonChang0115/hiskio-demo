import { fundraising } from '@/api.js';

const store = {
  state() {
    return {
      courses: [
        {
          course: 'all',
          name: '全部領域',
          list: [],
        },
        {
          course: 'web-frontend',
          name: '網站前端',
          list: [
            'JavaScript',
            'jQuery',
            'Vue.js',
            'SPA',
            'DOM',
            'ES6',
            'HTML',
            'Animate cc',
            'Nuxt.js',
            'Firebase',
            'SSR',
            'CSS',
            'Bootstrap',
            'Tailwind',
            '網頁排版',
            'D3.js',
            '資料視覺化',
            'React',
            '網頁設計',
            'RWD',
            'Webpack',
            'AJAX',
          ],
        },
        {
          course: 'web-backend',
          name: '網站後端',
          list: ['JavaScript', 'jQuery', 'Vue.js'],
        },
        {
          course: 'iot',
          name: '物聯網',
          list: [],
        },
        {
          course: 'mobile-application',
          name: '手機應用',
          list: [],
        },
        {
          course: 'database',
          name: '資料庫/資料科學',
          list: [],
        },
        {
          course: 'game-dev',
          name: '遊戲開發',
          list: [],
        },
        {
          course: 'microsoft-tech',
          name: '微軟技術',
          list: [],
        },
        {
          course: 'computer-science',
          name: '電腦科學',
          list: [],
        },
        {
          course: 'desktop-app',
          name: '桌面應用',
          list: [],
        },
        {
          course: 'ai',
          name: '人工智慧',
          list: [],
        },
        {
          course: 'others',
          name: '其他領域',
          list: [],
        },
      ],
      fundraisingCourse: [],
    };
  },
  getters: {},
  mutations: {
    setFundraisingCourse(state, { data }) {
      state.fundraisingCourse = data;
    },
  },
  actions: {
    async getFundraisingCourse({ commit }) {
      try {
        const res = await this.$axios({
          method: fundraising.getFundraising.method,
          url: fundraising.getFundraising.url,
        });
        commit('setFundraisingCourse', { data: res });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default store;
