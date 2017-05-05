var apos = require('apostrophe')({
  shortName: 'apostrophe-sandbox',
  title: 'apostrophe-sandbox',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    'link-widgets': {},
    'page-link-widgets': {},
    'drawer-widgets': {},

    'people': {},
    'people-widgets': {},
    'people-pages': {}
  }
});
