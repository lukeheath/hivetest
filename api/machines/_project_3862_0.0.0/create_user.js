module.exports = {
  "inputs": {
    "email": {
      "example": "luke@lukeheath.com",
      "friendlyName": "email",
      "required": true
    }
  },
  "exits": {
    "success": {
      "friendlyName": "then",
      "example": {
        "email": "luke@lukeheath.com",
        "id": 123,
        "createdAt": "2015-07-25T16:21:20.843Z",
        "updatedAt": "2015-07-25T16:21:20.843Z"
      }
    },
    "error": {
      "example": undefined
    }
  },
  "defaultExit": undefined,
  "fn": function(inputs, exits, env) {
    env.sails.models.user.create(env.sails.util.objCompact(inputs)).exec(function(err, records) {
      if (err) {
        return exits.error(err);
      }
      return exits.success(records);
    });
  },
  "identity": "create_user"
};