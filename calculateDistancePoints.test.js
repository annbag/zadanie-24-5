//distance, hillSize, kPoint
const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	describe('normal', () => {
		it('should return 86', () => {
			const actual = calculateDistancePoints(111,'normal', 98);

			const expected = '86';

			assert.equal(actual, expected);
		});
		it('should return 71', () => {
			const actual = calculateDistancePoints(103.5, 'normal', 98);

			const expected = '71';

			assert.equal(actual, expected);
		});
		it('should return 40', () => {
			const actual = calculateDistancePoints(88, 'normal', 98);

			const expected = '40';

			assert.equal(actual, expected);
		});
	});
	describe('large', () => {
		it('should return 85.2', () => {
			const actual = calculateDistancePoints(134, 'large', 120);

			const expected = '85.2';

			assert.equal(actual, expected);
		});
		it('should return 65.4', () => {
			const actual = calculateDistancePoints(123, 'large', 120);

			const expected = '65.4';

			assert.equal(actual, expected);
		});
		it('should return 50.1', () => {
			const actual = calculateDistancePoints(114.5, 'large', 120);

			const expected = '50.1';

			assert.equal(actual, expected);
		});
	});
	describe('mammoth', () => {
		it('should return 151.2', () => {
			const actual = calculateDistancePoints(226, 'mammoth', 200);

			const expected = '151.2';

			assert.equal(actual, expected);
		});
		it('should return 123.6', () => {
			const actual = calculateDistancePoints(203.0, 'mammoth', 200);

			const expected = '123.6';

			assert.equal(actual, expected);
		});
		it('should return 112.8', () => {
			const actual = calculateDistancePoints(194, 'mammoth', 200);

			const expected = '112.8';

			assert.equal(actual, expected);
		});
	})
})