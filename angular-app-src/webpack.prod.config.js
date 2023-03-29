const {withModuleFederationPlugin, shareAll} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({

  remotes: {
    "forum": "https://techroots-bv.github.io/public/ng-mfes/forum/remoteEntry.mjs",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
