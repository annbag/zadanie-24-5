const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	it('should return 55.5', () => {
		const actual = calculateStylePoints([18.5, 18.5, 18.5, 18.5, 18.5]);

		const expected = '55.5';

		assert.equal(actual, expected);
	});	
	it('should return 55', () => {
		const actual = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5]);

		const expected = '55';

		assert.equal(actual, expected);
	});
	it('should return 51.5', () => {
		const actual = calculateStylePoints([17.0, 17.0, 17.5, 17.0, 17.5]);

		const expected = '51.5';

		assert.equal(actual, expected);
	});
	it('should return 48.5', () => {
		const actual = calculateStylePoints([ 16.0, 16.0, 16.5, 16.5, 16.0]);

		const expected = '48.5';

		assert.equal(actual, expected);
	})
})
