const Dev = require("../models/dev");
const ParseStringtoArray = require("../utils/parseStringtoArray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsarray = ParseStringtoArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsarray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });
    
    return response.json({ devs });
  },
  async update(request, response) {
    const { github_username, latitude, longitude } = request.body;

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );
    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    dev = await Dev.update({
      github_username,
      name,
      avatar_url,
      bio,
      techs,
      location
    });
  }
};
