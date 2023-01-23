/**
 * @type {import('jest').Config;}
 */
const config = {
	roots: ['<rootDir>/src'],
	collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	transform: {
		'.+\\.ts$': 'ts-jest'
	},
	moduleNameMapper: {
		'@data(.*)': '<rootDir>/src/data/$1',
		'@domain(.*)': '<rootDir>/src/domain/$1'
	}
};

module.exports = config;
