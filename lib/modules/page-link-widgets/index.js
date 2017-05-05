module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Link to a page',
  addFields: [
    {
      name: '_page',
      type: 'joinByOne',
      withType: 'apostrophe-page',
      label: 'Page',
      required: true,
      idField: 'pageId'
    },
    {
      type: 'area',
      name: 'content',
      label: 'Content',
      options: {
        widgets: {
          'page-link': {},
          'apostrophe-rich-text': {
            toolbar: [ 'Bold', 'Italic' ]
          },
          'apostrophe-images': {}
        }
      }
    }
  ],
};