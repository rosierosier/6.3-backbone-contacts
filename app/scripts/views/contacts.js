console.log("Hello Views!");
var handlebars = require('handlebars');
var $ = require('jquery');
var handlebars = require('handlebars');
var Backbone = require('backbone');
var models = require('../models/contacts');


var contactSource = $('#contacts').html();
var contactTemplate = handlebars.compile(contactSource);
var Contact = Backbone.View.extend({
  //tagName represents a chunk of html
  //if no tagName is provided, it will automatically use a div
  tagName: "ul",
  className: "contact",
  // model:
  // collection:
  template: contactTemplate,

  events: {
    // "click .clickMe": "complete",
  },
  //set up variables to use with this--put them in initialize function
  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },
  complete: function(){
    console.log("clicked on");
  },
  render: function(){
    console.log('render called');
    this.$el.html(this.template(this.collection.toJSON));
    return this;
  }
});

var contact = new Contact;
contact.render();

module.exports = Contact;
