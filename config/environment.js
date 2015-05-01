'use strict';

module.exports = function (/* environment, appConfig */) {
  return {
    contentSecurityPolicy: {
      'default-src': "'*'",
      'script-src': "'*'",
      'font-src': "'*'",
      'connect-src': "'*'",
      'img-src': "'*'",
      'style-src': "'*'",
      'media-src': "'*'"
    }
  };
};
