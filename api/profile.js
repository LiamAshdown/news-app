import client from "./client";

const prefix = "/profile";

const URL = {
  PROFILE: `${prefix}`,
  UPDATE_NEWS_FEED: `${prefix}/update-news-feed`,
  UPDATE_NOTIFICATIONS: `${prefix}/update-notifications`,
};

export default {
  async profile() {
    const response = await client.get(URL.PROFILE);
    return response;
  },
  async updateNewsFeed(data) {
    const response = await client.post(URL.UPDATE_NEWS_FEED, data);
    return response;
  },
  async updateNotifications(data) {
    const response = await client.post(URL.UPDATE_NOTIFICATIONS, data);
    return response;
  },
};
