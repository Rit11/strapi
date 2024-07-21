'use strict';

/**
 * landingpage router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::landingpage.landingpage', {
    config: {
        find:{
            middlewares:['api::landingpage.landing-page-populate'],
        },
        findOne:{
            middlewares:['api::landingpage.landing-page-populate'],
        }
    },


});
