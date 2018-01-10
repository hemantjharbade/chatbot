'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function(e) {
  
  e.preventDefault();
  
  var message = $("#user-input").val();
  
  outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);
  
  setTimeout(function() {
    outputArea.append(`
      <div class='user-message'>
        <div class='message'>
          I'm like 20 lines of JavaScript I can't actually talk to you.
        </div>
      </div>
    `);
  }, 250);
  
  $("#user-input").val("");
  
});