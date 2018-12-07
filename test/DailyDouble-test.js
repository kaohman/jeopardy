const chai = require('chai');
const expect = chai.expect;
const Player = require('../DailyDouble.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

