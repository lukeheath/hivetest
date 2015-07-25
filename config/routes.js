module.exports.routes = {
  "get /user": {
    "target": "UserController.find"
  },
  "get /": {
    "target": "Home$Controller.find"
  }
};