import client from "./client";

const prefix = "/user";

const URL = {
  POSTS: `${prefix}`,
};

export default {
  async posts(userId) {
    const response = await client
      .get(`${URL.POSTS}/${userId}/posts`)
      .then((res) => res.data);

    return response;
  },
};
