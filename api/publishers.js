import client from "./client";

const prefix = "/publishers";

const URL = {
  INDEX: `${prefix}`,
  FOLLOW: `${prefix}/follow`,
  FOLLOWING: `${prefix}/following`,
};

export default {
  async index() {
    const response = await client.get(URL.INDEX);
    return response;
  },
  async follow(data) {
    const response = await client.post(URL.FOLLOW, data);
    return response;
  },
  async following() {
    const response = await client.get(URL.FOLLOWING);
    return response;
  },
};
