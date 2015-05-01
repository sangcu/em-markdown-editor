# Ember Markdown Editor  

This is an ember component that support an lightweight markdown editor for ember.js.  

##Features


* Lightweight  
* Use as an ember-cli add-on
* Drop to upload images
* Code hightlighting
* Preview mode
* Fullscreen mode
* Responsive layout

##How to use
Install as a ember-cli add-on

```js
ember install em-markdown-editor
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
##Contributions
## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
