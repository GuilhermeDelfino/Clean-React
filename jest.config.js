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
	}
};

module.exports = config;
