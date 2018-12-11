const chai = require('chai');
const expect = chai.expect;
const DailyDouble = require('../lib/DailyDouble.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../lib/domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

