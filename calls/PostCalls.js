import axios from 'axios';

const PostCalls = {
  async getPosts() {
    const url = `${process.env.MAIN_URL}posts`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
export default PostCalls;