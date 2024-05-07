
   // next.config.js
export default {
  pageExtensions: ['js', 'mjs'],
   
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
   
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto', 
    });

    return config;
  }, 
  
};

  
  