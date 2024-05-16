import client from "./client";

const prefix = "/post";

const URL = {
  STORE: `${prefix}/store`,
};

export default {
  async store(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("postTopicId", data.postTopicId);
    data.postTags.forEach((tag, index) => {
      formData.append(`postTags[${index}]`, tag);
    });

    formData.append("image", data.image);

    const response = await client.post(URL.STORE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  },
};
