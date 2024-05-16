import client from "./client";

const prefix = "/news-feed";

const URL = {
  TYPES: `${prefix}/types`,
  FOLLOWING: `${prefix}/following`,
};

export default {
  async types() {
    const response = await client.get(URL.TYPES);
    return response;
  },
  async following() {
    const response = await client.get(URL.FOLLOWING);
    return response;
  },
};
