const chai = require('chai');
const sinonChai = require('sinon-chai');
require('mocha-sinon');

chai.use(sinonChai);

const expect = chai.expect;

export { it, before, beforeEach, after, afterEach } from 'arrow-mocha/es5';
export { expect };

const jsdom = require('jsdom');
// Setup the jsdom environment
global.document = jsdom.jsdom('<!doctype html><html><body><div id="app"></div></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;