import { action } from '@storybook/addon-actions';
import CartItemCard from './CartItemCard.vue';
const courseData = {
  id: '584',
  name: '用 Elastic 與 TensorFlow 打造新聞推薦網站｜完全掌握資料儲存 x 搜尋 x 匯聚 x 呈現 x 預測',
  image:
    'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL3RmeW5qamx3ZWNhc2FpeCIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH19fQ==',
  gid: '',
  thumbnails: {
    original: 'https://assets.f5ezcode.in/courses/tfynjjlwecasaix',
    w800: 'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL3RmeW5qamx3ZWNhc2FpeCIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH0sInJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwid2lkdGgiOjgwMH19fQ==',
    w300: 'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL3RmeW5qamx3ZWNhc2FpeCIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH0sInJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwid2lkdGgiOjMwMH19fQ==',
  },
  courses: [
    {
      id: 584,
      title: '用 Elastic 與 TensorFlow 打造新聞推薦網站｜完全掌握資料儲存 x 搜尋 x 匯聚 x 呈現 x 預測',
      price: 2190,
      prices: [
        {
          fundraising: true,
          price: 1690,
          schedule_at: '2021-09-30T04:00:00+00:00',
        },
        {
          fundraising: true,
          price: 1790,
          schedule_at: '2021-10-01T16:00:00+00:00',
        },
        {
          fundraising: true,
          price: 1990,
          schedule_at: '2021-10-13T04:00:00+00:00',
        },
        {
          fundraising: true,
          price: 2190,
          schedule_at: '2021-10-22T04:00:00+00:00',
        },
        {
          fundraising: true,
          price: 2890,
          schedule_at: '2021-10-29T15:59:59+00:00',
        },
        {
          fundraising: false,
          price: 2890,
          schedule_at: '2021-12-10T04:00:00+00:00',
        },
      ],
      status: 'PRESALE',
      type: 'COURSE',
      ebook_id: '',
      thumbnails: {
        original: 'https://assets.f5ezcode.in/courses/tfynjjlwecasaix',
        w800: 'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL3RmeW5qamx3ZWNhc2FpeCIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH0sInJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwid2lkdGgiOjgwMH19fQ==',
        w300: 'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL3RmeW5qamx3ZWNhc2FpeCIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH0sInJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwid2lkdGgiOjMwMH19fQ==',
      },
      image:
        'https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL3RmeW5qamx3ZWNhc2FpeCIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH19fQ==',
    },
  ],
  coupon: {},
  package: {},
  source: 'PLATFORM',
  sub_source: 'DIRECT',
  pipeline: '',
  errors: {
    course: {
      duplicated: {
        status: false,
        items: [],
      },
      purchased: {
        status: false,
        items: [],
      },
    },
    coupon: {},
    package: {},
  },
  subtotal: 2190,
  total: 2190,
};
export default {
  title: '購物車卡片',
  component: CartItemCard,
  excludeStories: /.*Data$/,
};
export const actionsData = {
  ondeleteClick: action('ondeleteClick'),
};

const taskTemplate = `<cart-item-card :course="course" @deleteClick="ondeleteClick"></cart-item-card>`;

export const Default = () => ({
  components: { CartItemCard },
  template: taskTemplate,
  props: {
    course: {
      default: () => courseData,
    },
  },
  methods: actionsData,
});
