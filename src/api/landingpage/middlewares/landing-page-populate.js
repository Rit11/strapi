'use strict';

/**
 * `landing-page-populate` middleware
 */
const populate={
  metadata:{
  populate:{
  metaImage:{
  populate:true,
  fields:["name", "alernativeText","url"],
  },
  }
  },
  blocks:{
  populate: {
  link:{
  populate:true,
  },
  image:{
  fields:["name", "alernativeText","url"],
  },
  card:{
  populate:{
  image:{
  fields:["name", "alernativeText","url"],
  },
  }
  },
  plan:{
  populate:["services", "link"]
  },
  form:{
  populate:["inputs", "CTA"]
  },
  }
  }
  };


module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query={
      populate, 
      ...ctx.query
}
    await next();
  };
};
