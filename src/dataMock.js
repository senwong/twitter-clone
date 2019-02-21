// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random
// 输出结果
export function getUserInfo() {
  return {
    id: Random.natural(),
    avatarSrc: Random.dataImage('100x100'),
    name: Random.first(),
    // name: "ShaosenWong",
    nickName: Random.cname(),
    isV: Random.boolean(),
    desc: Random.cparagraph(),
    followers: Math.round(Math.random() * 10),
    following: Math.round(Math.random() * 100),
    phone: Random.integer(10000000000, 99999999999),
    email: Random.email(),
    location: "United States",
    birthday: "1995年1月22日",
    registerTime: "2005年1月",
  }
}
export function getTweet() {
  return {
    id: Random.natural(),
    user: getUserInfo(),
    content: Random.cparagraph(),
    createdTime: Random.datetime(),
    actions: {
      replayAmount: Random.integer(0,100),
      forewardAmount: Random.integer(0,100),
      likeAmount: Random.integer(0,100),
    }
  }
}

export function getTweets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tweetsNum = Math.round(Math.random() * 50);
      resolve(Array(tweetsNum).fill(null).map( () => getTweet())); 
    }, 1000);
  })
}
export function searchHot(query) {
  const res = {};
  const userNum = Math.random() < 0.5 ? 0 : Math.round(Math.random() * 5);
  res.users = Array(userNum).fill(null).map( () => getUserInfo())
  res.tweets =  getTweets();
  return res;
}
export function query(query) {
  const res = {};
  if (Math.random() < 0.5) {
    const userNum = Math.round(Math.random() * 10);
    res.users = Array(userNum).fill(null).map( () => getUserInfo())
  } else {
    res.tweets =  getTweets();
  }
  return res;
}
export function getSearchRecommend(query) {
  const res = {}
  const topicNum = Math.round(Math.random() * 5);
  res.topics = Array(topicNum).fill(null).map( () => ({
    id: Random.natural(),
    title: query+Random.word(),
    desc: Math.round(Math.random() * 100) + "Tweets today"
  }))
  const userNum = Math.round(Math.random() * 10);
  res.users = Array(userNum).fill(null).map( () => getUserInfo())
  if (Math.random() < 0.5) {
    res.userLinked = getUserInfo()
  }
  return res;
}
export function getEvent() {
  return {
    coverSrc: Random.dataImage('800x600'),
    title: Random.sentence(4, 10),
    subTitle: Random.sentence(2, 5),
    time: Random.datetime(),
  }
}
export function getNewEvents() {
  const eventNum = Math.round(Math.random() * 10); 
  return Array(eventNum).fill(null).map(() => {
    return {
      id: Random.natural(),
      subject: Random.sentence(1, 3),
      time: Random.datetime(),
      title: Random.sentence(4, 10),
      userNum: Math.round(Math.random() * 1000),
      coverSrc: Random.dataImage('100x100'),
    }
  })
}
export function getGlobalTrends() {
  const eventNum = Math.round(Math.random() * 10);
  return Array(eventNum).fill(null).map(() => {
    return {
      id: Random.natural(),
      title: Random.sentence(4, 10),
      tweetNum: Math.round(Math.random() * 1000)
    }
  })
}
export function getRecommendUsers() {
  const userNum = Math.round(Math.random() * 10);
  return {
    subject: Random.sentence(1, 3),
    reason: `因为你关注了 ${Random.name()} 及另外 ${Random.integer(1, 10)} 人`,
    tweets: Array(userNum).fill(null).map(() => getTweet()),
  }
}
export function getPopularArticles() {
  const articleNum = Math.round(Math.random() * 10);
  return Array(articleNum).fill(null).map(() => {
    return {
      id: Random.natural(),
      title: Random.sentence(4, 10),
      coverSrc: Random.dataImage('100x100'),
      website: Random.domain(),
      author: Random.name(),
    }
  })
}

export function getNotifications() {
  const notificationNum = Math.round(Math.random() * 20);
  return Array(notificationNum).fill(null).map(() => {
    return {
      id: Random.natural(),
      user: getUserInfo(),
      desc: Random.cparagraph(),
    }
  })
}
export function getRelatedUser() {
  const userNum = Math.round(Math.random() * 20);
  return Array(userNum).fill(null).map(getUserInfo)
}
export function getRecommendScreenName() {
  return Array(5).fill(null).map( () => Random.string("lower", 4, 14));
}

export function getRecommendFollowings() {
  const userNum = Math.round(Math.random() * 20);
  return Array(userNum).fill(null).map(getUserInfo)
}