import client from "./client";

const prefix = "/notifications";

const URL = {
  NOTIFICATIONS: `${prefix}`,
};

export default {
  async notifications() {
    const response = await client.get(URL.NOTIFICATIONS);
    return response;
  },
};
