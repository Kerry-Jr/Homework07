const axios = require('axios');

const api = {
  async getUser(username) {

    try {
      const queryUrl = `https://api.github.com/users/${username}`;
      const res = await axios.get(queryUrl);
      return res.data
    } catch (error) {
      throw new Error(error);
    }
  }   
  
};

module.exports = api;
