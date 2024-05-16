import client from "./client";

const prefix = "/countries";

const URL = {
  INDEX: `${prefix}`,
};

export default {
  async index() {
    const response = await client.get(URL.INDEX);
    return response;
  },
};
