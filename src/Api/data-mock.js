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
Mock.mock(/relatedusers/, (options) => {
  const limit = parseInt(options.url.split('relatedusers?limit=')[1], 10);
  const userNum = limit || 20;
  return Array(userNum).fill(null).map(getUserInfo);
});

Mock.mock(/bigevent/, () => ({
  coverSrc: Random.dataImage('800x600'),
  title: Random.sentence(4, 10),
  subTitle: Random.sentence(2, 5),
  time: Random.datetime(),
}));

Mock.mock(/newevents/, () => {
  const eventNum = Math.round(Math.random() * 10);
  return Array(eventNum).fill(null).map(() => ({
    id: Random.natural(),
    subject: Random.sentence(1, 3),
    time: Random.datetime(),
    title: Random.sentence(4, 10),
    userNum: Math.round(Math.random() * 1000),
    coverSrc: Random.dataImage('100x100'),
  }));
});

Mock.mock(/recommendusers/, () => {
  const userNum = Math.round(Math.random() * 10);
  return {
    subject: Random.sentence(1, 3),
    reason: `因为你关注了 ${Random.name()} 及另外 ${Random.integer(1, 10)} 人`,
    tweets: Array(userNum).fill(null).map(() => getTweet()),
  };
});
Mock.mock(/populararticles/, () => {
  const articleNum = Math.round(Math.random() * 10);
  return Array(articleNum).fill(null).map(() => ({
    id: Random.natural(),
    title: Random.sentence(4, 10),
    coverSrc: Random.dataImage('100x100'),
    website: Random.domain(),
    author: Random.name(),
  }));
});

Mock.mock(/searchrecommend\?query=*/, (options) => {
  const query = parseInt(options.url.split('searchrecommend?query=')[1], 10);
  const res = {};
  const topicNum = Math.round(Math.random() * 5);
  res.topics = Array(topicNum).fill(null).map(() => ({
    id: Random.natural(),
    title: query + Random.word(),
    desc: `${Math.round(Math.random() * 100)}Tweets today`,
  }));
  const userNum = Math.round(Math.random() * 10);
  res.users = Array(userNum).fill(null).map(() => getUserInfo());
  if (Math.random() < 0.5) {
    res.userLinked = getUserInfo();
  }
  return res;
});

Mock.mock(/notifications/, () => {
  const notificationNum = Math.round(Math.random() * 20);
  return Array(notificationNum).fill(null).map(() => ({
    id: Random.natural(),
    user: getUserInfo(),
    desc: Random.cparagraph(),
  }));
});
Mock.mock(/searchhot/, () => {
  const res = {};
  const userNum = Math.random() < 0.5 ? 0 : Math.round(Math.random() * 5);
  res.users = Array(userNum).fill(null).map(() => getUserInfo());
  res.tweets = Array(userNum).fill(null).map(() => getTweet());
  return res;
});
Mock.mock(/recommendscreenname/, () => Array(5).fill(null).map(() => Random.string('lower', 4, 14)));

Mock.mock(/recommendfollowings/, () => {
  const userNum = Math.round(Math.random() * 20);
  return Array(userNum).fill(null).map(getUserInfo);
});
