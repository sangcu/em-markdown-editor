# Ember Markdown Editor  

This is an ember component that support an lightweight markdown editor for ember.js.  

#Features


* Lightweight  
* Use as an ember-cli component
* Drop to upload images
* Code hightlighting
* Preview modes
* Fullscreen mode
* Responsive layout

#How to use
Install as a ember-cli add-on

```js
ember add-on em-markdown-editor
```
Then, add component to your template:  
```js
{{em-markdown-editor
  valueBinding="valueProperty"
  hightlight="true"
  preview="true"
  autosave="true"
  upload-adapter="controller.uploadHandler"
  }}
```

#Licensing
You can do whatever as you want.
