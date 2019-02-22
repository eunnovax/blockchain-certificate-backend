/**
 * Certificate.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name1: {
        type: "string",
        required: true
    },

    subject: {
        type: "string",
        required: true
    },

    year: {
        type: "number",
        required: true
    },

    qualification: {
        type: "string",
        required: true
    }

  },

};

