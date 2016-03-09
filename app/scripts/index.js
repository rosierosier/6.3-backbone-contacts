console.log("Hello World!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');
var Contact = require('./views/contacts');
var models = require('./models/contacts');


var contacts = new models.ContactCollection();
var contactView = new Contact({collection: contacts, el: $('#contacts')[0]});
console.log(contactView);
