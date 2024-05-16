import authApi from "./auth";
import client from "./client";
import countriesApi from "./countries";
import newsFeedApi from "./news-feed";
import notificationsApi from "./notifications";
import postApi from "./post";
import postTopicApi from "./post-topic";
import profileApi from "./profile";
import publishersApi from "./publishers";
import userApi from "./user";

export default {
  auth: authApi,
  countries: countriesApi,
  newsFeed: newsFeedApi,
  publishers: publishersApi,
  notifications: notificationsApi,
  profile: profileApi,
  postTopic: postTopicApi,
  post: postApi,
  user: userApi,
  setToken: (token) => {
    if (token === null) {
      delete client.defaults.headers.common["Authorization"];
      return;
    }

    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
};
