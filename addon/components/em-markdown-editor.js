import Ember from 'ember';
import layout from '../templates/components/em-markdown-editor';

export default Ember.Component.extend({
    content: "",
    layout: layout,

    lang: {
        preview: "Preview",
        editor: "Editor",
        fullscreen: "Click to toggle fullscreen"
    },

    onInit: Ember.on('didInsertElement', function() {
        this.updateLayout();
    }),

    onTyping: Ember.observer('content', function() {
        this.updateLayout();
    }),

    updateLayout: function() {
        var lines = this.get("content").split('\n');
        var height = lines.length * 15;
        var previewHeight = this.$('.em-markdown-preview').css('height');

        if (previewHeight > height) {
            height = previewHeight;
        }

        this.$('textarea, .em-markdown-output').css('height', height);

    },

    doubleClick: function() {
        this.$().children().toggleClass("fullscreen");
    },

    drop: function(ev) {
        ev.preventDefault();
        this.sendAction("onUpload", ev);
        Ember.debug("you dropped something");
    },

    dragEnter: function() {
        this.$('.em-markdown-editor').addClass("drop-file-enter");
    },

    dragLeave: function() {
        this.$('.em-markdown-editor').removeClass("drop-file-enter");
    },

    dragOver: function() {
        this.$('.em-markdown-editor').addClass("drop-file-enter");
    },

    actions: {
        toggleFullscreen: function() {
            this.doubleClick();
        }
    }
});
