const { Router } = require("express");
const routes = Router();
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/searchController");

routes.get("/devs", DevController.index);
routes.get("/search", SearchController.index);
routes.post("/devs", DevController.store);
routes.post("/devs", DevController.delete);

module.exports = routes;
