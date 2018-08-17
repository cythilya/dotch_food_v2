const data = {
  feeds: {
    data: [
      {
        id: '123456789',
        name: '陳秋心',
        image: 'https://dummyimage.com/35x35/F25E7A/fff',
        time: '今天下午 3:30',
        store: {
          id: 2,
          name: 'Grab a Bite 幸福提食',
        },
      },
      {
        id: '234567890',
        name: '黃怡如',
        image: 'https://dummyimage.com/35x35/f2dc6d/fff',
        time: '昨日下午 7:02',
        store: {
          id: 1,
          name: 'YAYOI Taiwan (南京松江店)',
        },
      },
      {
        id: '345678901',
        name: '王雅菁',
        image: 'https://dummyimage.com/35x35/41d1f2/fff',
        time: '三天以前',
        store: {
          id: 1,
          name: 'YAYOI Taiwan (南京松江店)',
        },
      },
      {
        id: '123456789',
        name: '陳秋心',
        image: 'https://dummyimage.com/35x35/F25E7A/fff',
        time: '今天下午 3:30',
        store: {
          id: 2,
          name: 'Grab a Bite 幸福提食',
        },
      },
      {
        id: '234567890',
        name: '黃怡如',
        image: 'https://dummyimage.com/35x35/f2dc6d/fff',
        time: '昨日下午 7:02',
        store: {
          id: 1,
          name: 'YAYOI Taiwan (南京松江店)',
        },
      },
      {
        id: '345678901',
        name: '王雅菁',
        image: 'https://dummyimage.com/35x35/41d1f2/fff',
        time: '三天以前',
        store: {
          id: 1,
          name: 'YAYOI Taiwan (南京松江店)',
        },
      },
    ],
  },
  hotTags: ['日式料理', '早午餐', '沙拉', '燒烤', '漢堡', '輕食', '牛排', '生魚片', '關東煮', '平價'],
  hotTagsObj: [
    {
      id: '1',
      text: '日式料理',
      value: '日式料理',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '2',
      text: '早午餐',
      value: '早午餐',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '3',
      text: '沙拉',
      value: '沙拉',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '4',
      text: '燒烤',
      value: '燒烤',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '5',
      text: '漢堡',
      value: '漢堡',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '6',
      text: '輕食',
      value: '輕食',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '7',
      text: '牛排',
      value: '牛排',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '8',
      text: '生魚片',
      value: '生魚片',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '9',
      text: '關東煮',
      value: '關東煮',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      id: '10',
      text: '平價',
      value: '平價',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
  ],
  news: [
    '今天吃飯，該吃什麼好呢？只要輸入美食欲望，立刻給你最真實、現場、生活化的評價，找餐廳再也不煩惱，就讓吃什麼，どっち幫你決定吃什麼！',
    '來自名古屋的早餐，Komeda coffee 鬆軟奶油吐司，南京松江站',
    '與小熊維尼的午茶約會！新宿「蜂蜜咖啡」限定登場',
    '七夕就是要浪漫一下！全台精選 10 家特色浪漫景觀餐廳',
  ],
  systemRecommend: [
    {
      id: '425cff76-1dbf-4041-b55f-258fcf33f605',
      name: '岡太郎家日式料理',
      location: {
        address: '台北市和平東路二段175巷12號',
      },
      image: [
        {
          url: 'http://cythilya.github.io/assets/dotch-food-v2/oka-taro-hours/oka-taro-hours.jpg',
        },
      ],
      tags: [
        '日式料理',
      ],
      phone: '0973-100860',
      sns: {
        'website': 'https://www.google.com.tw/maps/search/%E5%8F%B0%E5%8C%97%E5%B8%82%E5%92%8C%E5%B9%B3%E6%9D%B1%E8%B7%AF%E4%BA%8C%E6%AE%B5175%E5%B7%B712%E8%99%9F'
      },
    },
    {
      id: 'dd6f8034-3116-406a-9765-08160f523f52',
      name: 'Grab a Bite 幸福提食',
      location: {
        address: '台北市通化街140-1號',
      },
      image: [
        {
          url: 'http://cythilya.github.io/assets/dotch-food-v2/grab-a-bite/grab-a-bite-1.jpg',
        },
      ],
      tags: [
        '早午餐',
      ],
      phone: '02-27371073',
      sns: {
        'website': 'https://zh-tw.facebook.com/2014Grab.a.Bite/'
      },
    },
    {
      id: 'f4850a17-f308-4666-b2ef-43aaeef195d1',
      name: 'YAYOI Taiwan (南京松江店)',
      location: {
        address: '台北市中山區南京東路二段97號1樓',
      },
      image: [
        {
          url: 'https://cythilya.github.io/assets/dotch-food-v2/yayoyi/yayoyi-1.png?123',
        },
      ],
      tags: [
        '日式料理',
      ],
      phone: '02-25118696',
      sns: {
        'website': 'http://www.yayoi.com.tw/?go=home'
      },
    },
    {
      id: 'fd3fb81c-2507-45d4-95ec-b01df0f8784a',
      name: 'WE 里手工 pizza 日本料理 串燒',
      location: {
        address: '台北市中山區中原街114號',
      },
      image: [
        {
          url: 'http://cythilya.github.io/assets/dotch-food-v2/we/we-1.png?123',
        },
      ],
      tags: [
        '日式料理',
        '生魚片',
      ],
      phone: '02-25114127',
      sns: {
        'website': 'https://www.facebook.com/welibrother/',
        'facebook': 'https://www.facebook.com/welibrother/',
      },
    },
  ],
};

export default data;
