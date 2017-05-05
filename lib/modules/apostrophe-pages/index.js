// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {name: 'default', label: 'Default'},
    {name: 'home', label: 'Home'},
    {name: 'people-page', label: 'People'}
  ],
  filters: {
    ancestors: {
      children: {
        depth: 2
      }
    },
    children: true
  }
};
