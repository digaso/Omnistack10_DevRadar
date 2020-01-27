const axios = require("axios");
const Dev = require("../models/dev");
const ParseStringtoArray = require("../utils/parseStringtoArray");

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      let { name = login, avatar_url, bio } = apiResponse.data;

      const techsarray = ParseStringtoArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsarray,
        location
      });
    }

    return response.json(dev);
  },
  async delete(request, response) {
    const { github_username } = request.body;
    let dev = await Dev.findOne({ github_username });
    dev = await Dev.remove({ github_username });


  }
};
