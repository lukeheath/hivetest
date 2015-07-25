var Machine = require("machine");
module.exports = {
    'find': function(req, res) {
        Machine.build({
            inputs: {},
            exits: {
                respond: {}
            },
            fn: function(inputs, exits) {
                // List User
                sails.machines['_project_3862_0.0.0'].find_user({}).setEnvironment({
                    sails: sails
                }).exec({
                    "success": function(listUser) {
                        return exits.respond({
                            data: listUser,
                            action: "respond_with_result_and_status",
                            status: 200
                        });

                    },
                    "error": function(listUser) {
                        return exits.error({
                            data: listUser,
                            status: 500
                        });

                    }
                });
            }
        }).configure(req.params.all(), {
            respond: res.response,
            error: res.negotiate
        }).exec();
    }
};