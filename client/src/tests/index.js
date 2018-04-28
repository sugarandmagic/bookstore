/* eslint no-undef: 0 */  // --> OFF
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
require('babel-register');
require('ignore-styles');
