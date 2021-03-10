import EmberRouter from '@ember/routing/router';
import config from 'ellie-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('simply-gluten-free');
  this.route('icon-library');
  this.route('locate-local');
  this.route('covid-update');
});


