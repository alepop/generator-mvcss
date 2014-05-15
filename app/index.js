'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var MvcssGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  // askFor: function () {
  //   var done = this.async();
  //
  //   // Have Yeoman greet the user.
  //   var prompts = [{
  //     type: 'confirm',
  //     name: 'someOption',
  //     message: 'Would you like to enable this option?',
  //     default: true
  //   }];
  //
  //   this.prompt(prompts, function (props) {
  //     this.someOption = props.someOption;
  //
  //     done();
  //   }.bind(this));
  // },

  projectFolders: function () {
    this.mkdir('core');
    this.mkdir('modules');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectFiles: function () {
    this.copy('_application.sass', 'applications.sass');
    this.directory('core', 'core')
  }
});

module.exports = MvcssGenerator;
