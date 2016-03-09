console.log("Hello World!");
var handlebars = require('handlebars');
var $ = require('jquery');
var Backbone = require('backbone');
var Contact = require('./views/contacts');
var models = require('./models/contacts');


var contacts = new models.ContactCollection();
var contactView = new Contact({collection: contacts, el: $('.contact-list')[0]});
// console.log(contactView);


$('#submit-btn').on ('click', function(event){
  event.preventDefault();
  var name = $('#first').val() + $('#last').val();
  var email = $('#email').val();
  var number = $('#number').val();
  var twitter = $('#twitter').val();
  var linkedin = $('#linkedin').val();
  var contactInfo = {'name': name, 'email': email, 'number': number, 'twitter': twitter, 'linkedin': linkedin};
  console.log(contactInfo);
  contacts.input(contactInfo);
  console.log("this is contacts log",contacts);
});
