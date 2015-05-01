/* jshint node: true */
'use strict';

module.exports = {
  name: 'em-markdown-editor',
  included:function(app){
    this._super.included(app);
   app.import('vendor/em-markdown-editor/style.css',{
     type:'vendor'
   });
  }
};
