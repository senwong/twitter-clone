import Mock from 'mockjs';

const { Random } = Mock;
// mock getTweets()
export function getTweet() {
  return {
    id: Random.natural(),
    userId: Random.integer(0, 10),
    content: Random.cparagraph(),
    createdTime: Random.datetime(),
    replayAmount: Random.integer(0, 100),
    forewardAmount: Random.integer(0, 100),
    likeAmount: Random.integer(0, 100),
  };
}
Mock.mock(/tweets/, () => {
  const tweetsNum = Math.round(Math.random() * 50);
  return Array(tweetsNum).fill(null).map(() => getTweet());
});

// mock getUserById()
export function getUserInfo() {
  return {
    id: Random.natural(),
    avatarSrc: Random.dataImage('100x100'),
    name: Random.first(),
    // name: 'ShaosenWong',
    nickName: Random.cname(),
    isV: Random.boolean(),
    desc: Random.cparagraph(),
    followers: Math.round(Math.random() * 10),
    following: Math.round(Math.random() * 100),
    phone: Random.integer(10000000000, 99999999999),
    email: Random.email(),
    location: 'United States',
    birthday: '1995年1月22日',
    registerTime: '2005年1月',
  };
}
Mock.mock(/user\?id=*/, (options) => {
  const userId = parseInt(options.url.split('user?id=')[1], 10);
  const userData = getUserInfo();
  userData.id = userId;
  return userData;
});
// getUserByName()
Mock.mock(/user\?name=*/, (options) => {
  const name = options.url.split('user?name=')[1];
  const userData = getUserInfo();
  userData.name = name;
  return userData;
});

// getGlobalTrends()
function generateTrend() {
  return {
    id: Random.natural(),
    title: Random.sentence(4, 10),
    tweetNum: Math.round(Math.random() * 1000),
  };
}
Mock.mock(/trends\?limit=*/, (options) => {
  const limit = parseInt(options.url.split('trends?limit=')[1], 10);
  return Array(limit).fill(null).map(() => generateTrend());
});
Mock.mock(/trends/, () => {
  const limit = 20;
  return Array(limit).fill(null).map(() => generateTrend());
});
